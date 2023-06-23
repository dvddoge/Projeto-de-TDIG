import React from 'react';
import { useForm } from 'react-hook-form';

export default function RegistrationForm() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  
  const isTeacher = watch('role') === 'teacher'; // observe the role field to dynamically change the form

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name', { required: true })} placeholder="Name" />
      {errors.name && <p>This field is required</p>}

      <input {...register('email', { required: true })} placeholder="Email" />
      {errors.email && <p>This field is required</p>}

      <input type="password" {...register('password', { required: true })} placeholder="Password" />
      {errors.password && <p>This field is required</p>}
      
      <select {...register('role', { required: true })}>
        <option value="">Select role</option>
        <option value="student">Student</option>
        <option value="teacher">Teacher</option>
      </select>
      {errors.role && <p>This field is required</p>}

      {isTeacher && (
        <>
          <input {...register('field', { required: true })} placeholder="Field of Study" />
          {errors.field && <p>This field is required</p>}

          <input {...register('degree', { required: true })} placeholder="Degree" />
          {errors.degree && <p>This field is required</p>}
        </>
      )}

      <input type="submit" />
    </form>
  );
}
