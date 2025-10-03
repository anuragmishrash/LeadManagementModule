import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { LeadFormData } from '../types/Lead';

const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  phone: yup.string().matches(/^\d{7,15}$/, 'Phone must be 7-15 digits').optional(),
  company: yup.string().optional(),
  source: yup.string().oneOf(['Website', 'Ad', 'Referral', 'Event', 'Other', 'Social Media', 'Cold Call', 'Email Campaign']).required(),
  notes: yup.string().optional(),
  optIn: yup.boolean().required(),
  status: yup.string().oneOf(['New', 'Qualified', 'Converted', 'Follow-Up', 'Lost']).required(),
  qualification: yup.string().oneOf(['High School', 'Bachelors', 'Masters', 'PhD', 'Other']).required(),
  interest: yup.string().oneOf(['Web Development', 'Mobile Development', 'Data Science', 'Digital Marketing', 'UI/UX Design', 'Other']).required(),
  assignedTo: yup.string().required('Assigned to is required'),
  city: yup.string().optional(),
  passoutYear: yup.number().min(1950, 'Invalid year').max(2030, 'Invalid year').optional(),
  heardFrom: yup.string().optional(),
});

interface LeadFormProps {
  onSubmit: (data: LeadFormData) => Promise<void>;
  isSubmitting: boolean;
}

const LeadForm: React.FC<LeadFormProps> = ({ onSubmit, isSubmitting }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LeadFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      source: 'Website',
      notes: '',
      optIn: true,
      status: 'New',
      qualification: 'Bachelors',
      interest: 'Web Development',
      assignedTo: 'Anurag Mishra',
      city: '',
      passoutYear: new Date().getFullYear(),
      heardFrom: '',
    },
  });

  const handleFormSubmit = async (data: LeadFormData) => {
    await onSubmit(data);
    reset();
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">Lead Capture Form</h2>
      
      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name *
            </label>
            <input
              {...register('name')}
              type="text"
              id="name"
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter full name"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email *
            </label>
            <input
              {...register('email')}
              type="email"
              id="email"
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter email address"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          {/* Phone Field */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <input
              {...register('phone')}
              type="tel"
              id="phone"
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.phone ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter phone number"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
            )}
          </div>

          {/* Company Field */}
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
              Company
            </label>
            <input
              {...register('company')}
              type="text"
              id="company"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter company name"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Status Field */}
          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
              Status *
            </label>
            <select
              {...register('status')}
              id="status"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="New">New</option>
              <option value="Qualified">Qualified</option>
              <option value="Converted">Converted</option>
              <option value="Follow-Up">Follow-Up</option>
              <option value="Lost">Lost</option>
            </select>
          </div>

          {/* Qualification Field */}
          <div>
            <label htmlFor="qualification" className="block text-sm font-medium text-gray-700 mb-1">
              Qualification *
            </label>
            <select
              {...register('qualification')}
              id="qualification"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="High School">High School</option>
              <option value="Bachelors">Bachelors</option>
              <option value="Masters">Masters</option>
              <option value="PhD">PhD</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Interest Field */}
          <div>
            <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">
              Interest Field *
            </label>
            <select
              {...register('interest')}
              id="interest"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Web Development">Web Development</option>
              <option value="Mobile Development">Mobile Development</option>
              <option value="Data Science">Data Science</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Source Field */}
          <div>
            <label htmlFor="source" className="block text-sm font-medium text-gray-700 mb-1">
              Source *
            </label>
            <select
              {...register('source')}
              id="source"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Website">Website</option>
              <option value="Ad">Ad</option>
              <option value="Referral">Referral</option>
              <option value="Event">Event</option>
              <option value="Social Media">Social Media</option>
              <option value="Cold Call">Cold Call</option>
              <option value="Email Campaign">Email Campaign</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Assigned To Field */}
          <div>
            <label htmlFor="assignedTo" className="block text-sm font-medium text-gray-700 mb-1">
              Assigned To *
            </label>
            <select
              {...register('assignedTo')}
              id="assignedTo"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Anurag Mishra">Anurag Mishra</option>
              <option value="Jane Smith">Jane Smith</option>
              <option value="Emily Davis">Emily Davis</option>
              <option value="Robert Johnson">Robert Johnson</option>
            </select>
          </div>

          {/* City Field */}
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
              City
            </label>
            <input
              {...register('city')}
              type="text"
              id="city"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter city"
            />
          </div>

          {/* Passout Year Field */}
          <div>
            <label htmlFor="passoutYear" className="block text-sm font-medium text-gray-700 mb-1">
              Passout Year
            </label>
            <input
              {...register('passoutYear')}
              type="number"
              id="passoutYear"
              min="1950"
              max="2030"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="2024"
            />
          </div>
        </div>

        {/* Heard From Field */}
        <div>
          <label htmlFor="heardFrom" className="block text-sm font-medium text-gray-700 mb-1">
            Heard From
          </label>
          <input
            {...register('heardFrom')}
            type="text"
            id="heardFrom"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="How did you hear about us?"
          />
        </div>

        {/* Notes Field */}
        <div>
          <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
            Notes
          </label>
          <textarea
            {...register('notes')}
            id="notes"
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Additional notes..."
          />
        </div>

        {/* Opt-in Checkbox */}
        <div className="flex items-center">
          <input
            {...register('optIn')}
            type="checkbox"
            id="optIn"
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="optIn" className="ml-2 block text-sm text-gray-700">
            I agree to receive marketing communications
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-2 px-4 rounded-md font-medium transition-colors ${
            isSubmitting
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500'
          } text-white`}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Lead'}
        </button>
      </form>
    </div>
  );
};

export default LeadForm;