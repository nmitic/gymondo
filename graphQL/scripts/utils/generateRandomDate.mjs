export const getRandomDateInRange = (startDate, endDate) => {
  if(!startDate) startDate = new Date();
  if(!endDate) endDate = new Date();

  let diff = endDate.getTime() - startDate.getTime();
  return new Date(Math.random() * diff + startDate.getTime()).toISOString();
}