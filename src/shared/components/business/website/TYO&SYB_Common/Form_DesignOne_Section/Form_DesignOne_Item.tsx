import { toast } from '@/components/common/ui/use-toast';
import IconLineDirection from '@/components/icon/IconLineDirection';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';

const FormDesignOneItem = () => {
  const [cityAndProvince, setCityAndProvince] = useState<any[]>();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    workPosition: '',
    companyName: '',
    cityOrProvince: '',
    staffSize: '',
  });
  useQuery(['getCityAndProvince'], {
    queryFn: () => axios.get(`https://vn-public-apis.fpo.vn/provinces/getAll?limit=-1`),
    onSuccess(data) {
      setCityAndProvince(data?.data.data.data);
    },
  });
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
    toast({
      variant: 'success',
      title: 'Chúc mừng',
      description: 'Bạn đã đăng ký thành công',
    });
  };
  return (
    <div className='w-full flex flex-col justify-start items-start md:border-2 md:border-slate-300 md:rounded-lg md:shadow-md z-30'>
      <div className='w-full flex justify-start items-start'>
        <form onSubmit={handleSubmit} className='w-full mt-4 md:p-8 text-[#A6A6A6]'>
          <div className='w-full mb-4'>
            <label htmlFor='fullName' className='block mb-1'>
              Họ và tên của bạn
            </label>
            <input
              type='text'
              id='fullName'
              value={formData.fullName}
              onChange={e =>
                setFormData({
                  ...formData,
                  fullName: e.target.value,
                })
              }
              className='w-full bg-transparent px-3 py-2 border-b rounded focus:outline-none'
              required
            />
          </div>
          <div className='w-full grid grid-cols-2 gap-4 mb-4'>
            <div className='w-full'>
              <label htmlFor='email' className='block mb-1'>
                Email*
              </label>
              <input
                type='text'
                id='email'
                value={formData.email}
                onChange={e =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
                className='w-full bg-transparent px-3 py-2 border-b rounded focus:outline-none'
                required
              />
            </div>
            <div className='w-full'>
              <label htmlFor='phoneNumber' className='block mb-1'>
                Số điện thoại:
              </label>
              <input
                type='tel'
                id='phoneNumber'
                value={formData.phoneNumber}
                onChange={e =>
                  setFormData({
                    ...formData,
                    phoneNumber: e.target.value,
                  })
                }
                className='w-full bg-transparent px-3 py-2 border-b rounded focus:outline-none'
                required
              />
            </div>
          </div>
          <div className='w-full grid grid-cols-2 gap-4 mb-4'>
            <div className='w-full'>
              <label htmlFor='workPosition' className='block mb-1'>
                Vị trí công việc
              </label>
              <input
                id='workPosition'
                value={formData.workPosition}
                onChange={e =>
                  setFormData({
                    ...formData,
                    workPosition: e.target.value,
                  })
                }
                className='w-full bg-transparent px-3 py-2 border-b rounded focus:outline-none'
                required
              />
            </div>
            <div className='w-full'>
              <label htmlFor='companyName' className='block mb-1'>
                Tên công ty
              </label>
              <input
                id='companyName'
                value={formData.companyName}
                onChange={e =>
                  setFormData({
                    ...formData,
                    companyName: e.target.value,
                  })
                }
                className='w-full bg-transparent px-3 py-2 border-b rounded focus:outline-none'
                required
              />
            </div>
          </div>
          <div className='w-full grid grid-cols-2 justify-between items-end gap-4 mb-4'>
            <div className='w-full'>
              <label htmlFor='staffSize' className='block mb-1'>
                Chọn tỉnh/thành phố
              </label>
              <select
                id='cityOrProvince'
                value={formData.cityOrProvince}
                onChange={e =>
                  setFormData({
                    ...formData,
                    cityOrProvince: e.target.value,
                  })
                }
                className='w-full bg-transparent px-3 py-2 border-b rounded focus:outline-none'
                required
              >
                <option value='' disabled />
                {cityAndProvince &&
                  cityAndProvince.map((item, index) => (
                    <option key={index} value={item.name}>
                      {item.name}
                    </option>
                  ))}
              </select>
            </div>

            <div className='w-full'>
              <label htmlFor='staffSize' className='block mb-1'>
                Quy mô nhân sự
              </label>
              <input
                id='staffSize'
                value={formData.staffSize}
                onChange={e =>
                  setFormData({
                    ...formData,
                    staffSize: e.target.value,
                  })
                }
                className='w-full bg-transparent px-3 py-2 border-b rounded focus:outline-none'
                required
              />
            </div>
          </div>
          <div className='w-full flex flex-col justify-center items-center'>
            <p className='text-center'>
              Chúng tôi tự hào chia sẻ những case study đặc biệt, trong đó chúng tôi đã giúp các khách hàng vượt qua
              thách thức và đạt được thành công đáng kể
            </p>
            <button
              style={{ border: '1px solid #FC5F04' }}
              type='submit'
              className={`bg-[#fff] text-orange-500 relative flex justify-center items-center gap-3 text-left py-2 px-4 cursor-pointer mt-3 hover:border-2 hover:ease-in-out hover:transition rounded-full`}
            >
              <p className='text-sm'>Đăng ký ngay</p>
              <IconLineDirection color='#FC5F04' />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormDesignOneItem;
