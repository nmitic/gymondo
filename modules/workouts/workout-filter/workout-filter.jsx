import { useRouter } from 'next/router';
import { useState } from 'react';

const categories = [
  "c1",
  "c2",
  "c3",
  "c4",
  "c5",
  "c6",
  "c7",
];

const DEFAULT_CATEGORY = "default";

const DatePicker = ({value, onChange, name, id}) => {
  const todayDate = new Date();
  const oneYearFromToday = new Date(
    todayDate.getFullYear() + 1,
    todayDate.getMonth(),
    todayDate.getDate(),
  );

  const minDate = todayDate.toLocaleDateString('en-CA');
  const maxDate = oneYearFromToday.toLocaleDateString('en-CA');

  return (
    <input
      onChange={event => onChange(event)}
      value={value}
      type="date" 
      min={minDate} 
      max={maxDate} 
      name={name}
      id={id}
      className="focus:outline-none bg-white cursor-pointer bg-transparent text-gymondo font-semibold py-2 px-4 border border-gymondo rounded"
  />
  )
}

const Select = ({value, onChange, children, name, id}) => {
  return (
    <select
      name={name} 
      id={id}
      value={value}
      onChange={onChange}
      className="focus:outline-none bg-white cursor-pointer bg-transparent text-gymondo font-semibold py-2 px-4 border border-gymondo rounded"
    >
      {children}
    </select>
  )
}

const WorkoutFilter = ({}) => {
  const router = useRouter();
  const currentQuery = router.query;
  const initialState = {
    startDate: new Date().toLocaleDateString('en-CA'),
    category: DEFAULT_CATEGORY
  }
  const [startDate, setStartDate] = useState(currentQuery.startDate || initialState.startDate);
  const [category, setCategory] = useState(currentQuery.category || initialState.category);

  const handleSubmit = event => {
    event.preventDefault();

    router.push({
      query: {
        ...currentQuery,
        ...(Boolean(startDate !== initialState.startDate) && {startDate}),
        ...(Boolean(category !== initialState.category) && {category}),
        page: 0,
      }
    })
  }

  const handleReset = () => {
    setStartDate(initialState.startDate);
    setCategory(initialState.category);

    router.push("/workouts")
  }

  return (
    <form
      onSubmit={handleSubmit}
      onReset={handleReset}
      className="grid grid-cols-4 gap-4 m-auto max-w-2xl p-8 sticky top-14"
    >
      <DatePicker 
        value={startDate}
        onChange={event => setStartDate(event.target.value)}
        name="startDate"
        id="startDate"
      />
      <Select
        value={category}
        onChange={event => setCategory(event.target.value)}
        name="category"
        id="category"
      >
        <option value={DEFAULT_CATEGORY} disabled>select category</option>
        {categories.map(category => <option key={category} value={category}>{category}</option>)}
      </Select>
      <input
        type="reset"
        value="clear filters"
        className="transition-all cursor-pointer bg-gymondo hover:bg-white text-white font-semibold hover:text-gymondo py-2 px-4 border border-gymondo rounded"      
      />
      <input 
        type="submit"
        value="Filter Workouts"
        className="transition-all cursor-pointer bg-gymondo hover:bg-white text-white font-semibold hover:text-gymondo py-2 px-4 border border-gymondo rounded" 
      />
    </form>
  )
}

export default WorkoutFilter;