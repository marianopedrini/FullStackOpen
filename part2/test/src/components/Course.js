import Header from './Header';
import Content from './Content';

const Course = ({ course }) => {
  const totalCourses = course.parts.reduce(function (prev, act) {
    return prev + act.exercises;
  }, 0);

  return (
    <div>
      <Header title={course.name} />
      <Content parts={course.parts} />
      <h4>Total of {totalCourses} exercises</h4>
    </div>
  );
};

export default Course;
