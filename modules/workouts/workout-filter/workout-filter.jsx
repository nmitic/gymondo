const categories = [
  "c1",
  "c2",
  "c3",
  "c4",
  "c5",
  "c6",
  "c7",
]

const WorkoutFilter = ({}) => {
  const todayDate = new Date();
  const oneYearFromToday = new Date(
    todayDate.getFullYear() + 1,
    todayDate.getMonth(),
    todayDate.getDate(),
  );

  const minDate = todayDate.toLocaleDateString('en-CA');
  const maxDate = oneYearFromToday.toLocaleDateString('en-CA');

  return (
    <div>
      <input type="date" min={minDate} max={maxDate} />
      <select name="category" id="category" defaultValue="default">
        <option value="default" disabled>select category</option>
        {categories.map(category => <option key={category} value={category}>{category}</option>)}
      </select>
    </div>
  )
}

export default WorkoutFilter;