import { toast } from '@/components/common/ui/use-toast';
import IconLineDirection from '@/components/icon/IconLineDirection';
import useTrans from '@/hooks/useTrans';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';

const FormDesignOneItem = () => {
  const { trans } = useTrans();
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
    <div className='z-30 flex w-full flex-col items-start justify-start md:rounded-lg md:border-2 md:border-slate-300 md:shadow-md'>
      <div className='flex w-full items-start justify-start'>
        <form onSubmit={handleSubmit} className='mt-4 w-full text-[#A6A6A6] md:p-8'>
          <div className='mb-4 w-full'>
            <label htmlFor='fullName' className='mb-1 block'>
              {trans.website.formDesignOneSection.fullName}
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
              className='w-full rounded border-b bg-transparent px-3 py-2 focus:outline-none'
              required
            />
          </div>
          <div className='mb-4 grid w-full grid-cols-2 gap-4'>
            <div className='w-full'>
              <label htmlFor='email' className='mb-1 block'>
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
                className='w-full rounded border-b bg-transparent px-3 py-2 focus:outline-none'
                required
              />
            </div>
            <div className='w-full'>
              <label htmlFor='phoneNumber' className='mb-1 block'>
                {trans.website.formDesignOneSection.phoneNumber}
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
                className='w-full rounded border-b bg-transparent px-3 py-2 focus:outline-none'
                required
              />
            </div>
          </div>
          <div className='mb-4 grid w-full grid-cols-2 gap-4'>
            <div className='w-full'>
              <label htmlFor='workPosition' className='mb-1 block'>
                {trans.website.formDesignOneSection.workPosition}
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
                className='w-full rounded border-b bg-transparent px-3 py-2 focus:outline-none'
                required
              />
            </div>
            <div className='w-full'>
              <label htmlFor='companyName' className='mb-1 block'>
                {trans.website.formDesignOneSection.companyName}
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
                className='w-full rounded border-b bg-transparent px-3 py-2 focus:outline-none'
                required
              />
            </div>
          </div>
          <div className='mb-4 grid w-full grid-cols-2 items-end justify-between gap-4'>
            <div className='w-full'>
              <label htmlFor='cityOrProvince' className='mb-1 block'>
                {trans.website.formDesignOneSection.cityOrProvince}
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
                className='w-full rounded border-b bg-transparent px-3 py-2 focus:outline-none'
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
              <label htmlFor='staffSize' className='mb-1 block'>
                {trans.website.formDesignOneSection.staffSize}
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
                className='w-full rounded border-b bg-transparent px-3 py-2 focus:outline-none'
                required
              />
            </div>
          </div>
          <div className='flex w-full flex-col items-center justify-center'>
            <p className='text-center'>{trans.website.formDesignOneSection.description}</p>
            <button
              style={{ border: '1px solid #FC5F04' }}
              type='submit'
              className={`relative mt-3 flex cursor-pointer items-center justify-center gap-3 rounded-[12px] bg-[#fff] px-4 py-2 text-left text-orange-500 hover:border-2 hover:transition hover:ease-in-out`}
            >
              <p className='text-sm'>{trans.website.formDesignOneSection.register}</p>
              <IconLineDirection color='#FC5F04' />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormDesignOneItem;
