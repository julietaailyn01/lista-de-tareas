 
import './App.css';
import TasksList from './components/TasksList';
import TaskForm from './components/TaskForm';


function App() {
  return (
    <div className="bg-zinc-900 h-screen text-white flexjustify-center items-center">
      <div className='py-20'>
      <div className='justify-center flex items-center'>
        <TaskForm/> 
      </div>
      <div className='flex items-center justify-center'>
        <TasksList/>   
      </div>
      </div>
                     
    </div>
  );
}

export default App;
