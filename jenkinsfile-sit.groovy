/* groovylint-disable NestedBlockDepth, UnusedVariable, VariableTypeRequired */
// git repository info
def gitRepository = 'http://171.244.51.190/ngsdigital/bfsi/product/website/website_fe'

def gitBranch = 'develop'

// Image infor in registry
def imageGroup = 'ngs-website'
def appName = 'fe-website'
/* groovylint-disable-next-line UnusedVariable */
def namespace = 'website-uat'

// harbor-registry credentials
def registryCredential = 'jenkins-admin'
// gitlab credentials
// def gitlabCredential = 'Token-pass-jenkins-admin'
def gitlabCredential = 'ngsd-gitlab-thanh.nguyen'

dockerBuildCommand = '. -f Dockerfile.sat'
def version = "try-0.${BUILD_NUMBER}"
def today = new Date()
def tz = TimeZone.getTimeZone('GMT+7')
def tag = today.format('yyy-MM-dd-HH-mm', tz)

pipeline {
    agent any

    environment {
        DOMAIN_REGISTRY = 'harbor.ngsd.vn'
        DOCKER_REGISTRY = "https://${DOMAIN_REGISTRY}"
        DOCKER_IMAGE_NAME = "${imageGroup}/${appName}"
        DOCKER_IMAGE = "${DOMAIN_REGISTRY}/${DOCKER_IMAGE_NAME}"
        TAG = "v-$tag"
    }

    stages {
        stage('Checkout project')
        {
            steps
          {
                echo 'checkout project'
                git branch: gitBranch,
               credentialsId: gitlabCredential,
               url: gitRepository
                sh 'git reset --hard'
          }
        }
        stage('check environment') {
            steps
            {
                sh 'java -version'
                sh "echo ${TAG}"
            }
        }
        // ---
        // stage('vna build!') {
        //     steps {
        //         sh 'chmod a+x 1.build-push.sh'
        //         sh "docker build -t ${DOCKER_IMAGE} -t ${DOCKER_IMAGE}:${TAG} . -f Dockerfile.dev"
        //         sh "docker push ${DOCKER_IMAGE} -a"
        //         sh './1.build-push.sh'
        //     }
        // }
        // stage('Deploy and run') {
        //   steps {
        //     sh 'chmod a+x ./2.deploy.sh'
        //     sh "helm upgrade --install website cicd/website --namespace vna-dev --set image.tag=${TAG}"
        //     // sh './2.deploy.sh'
        //     // sh 'helm upgrade --install vna cicd/user-api -n vna-dev'
        //   }
        // }

        // ---


        // stage('clean') {
        //     steps{
        //     sh "chmod +x mvnw"
        //     sh "./mvnw -ntp clean -DskipTest"
        //     }
        // }

        // stage('Build project')
        // {
        //     steps
        //   {
        //         // sh "user=whoami && srcdir=`pwd` && echo $srcdir && ls -l $srcdir/* && echo $user &&  chown -R $user:$user $srcdir && chmod a+x */mvnw"
        //         sh 'chmod +x mvnw'
        //         sh './mvnw -ntp clean package -DskipTest'
        //   }
        // }
        // stage('Initialize'){
        //     steps
        //     {
        //         sh "echo $PATH"
        //         def dockerHome = tool docker-lastest
        //         echo "${dockerHome}"
        //         env.PATH = "${dockerHome}/bin:${env.PATH}"
        //         sh 'usermod -aG docker jenkins'
        //     }
        // }
        stage('Build docker and push to registry')
        {
            steps
          {
                script {
                    app = docker.build(DOCKER_IMAGE_NAME, dockerBuildCommand)
                    docker.withRegistry(DOCKER_REGISTRY, registryCredential) {
                        app.push()
                        app.push(TAG)
                    }

                sh "docker rmi ${DOCKER_IMAGE_NAME} -f"
                sh "docker rmi ${DOCKER_IMAGE}:${TAG} -f"
                sh "docker rmi ${DOCKER_IMAGE} -f"
            }
      }
    }

    stage('Deploy and run') {
          steps {
            sh 'chmod a+x ./2.deploy.sh'
            sh "helm upgrade --install website cicd/website --namespace ${namespace} --set image.tag=${TAG}"
            // sh './2.deploy.sh'
            // sh 'helm upgrade --install vna cicd/user-api -n vna-dev'
          }
        }
    }
}
