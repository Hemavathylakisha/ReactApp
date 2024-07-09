import React, { useState } from 'react';

const Todo = () => {
    const TODO = 'TODO';
    const DOING = 'DOING';
    const DONE = 'DONE';

    const[value, setValue] = useState('');
    const[tasks, setTasks] = useState([]);
    const[dragTask, setDragTask] = useState(null);
    const[updateItem, setUpdateItem] = useState(null);

    const handleChange = (e) => {
        setValue(e.target.value);
    }
    const handleKeyDown = (e) => {
        console.log(e.keyCode);
        if(e.keyCode === 13){
            if(updateItem){
                const obj = {
                    title: value,
                    status:updateItem.status, 
                    id: updateItem.id 
                }
                const copyTask = [...tasks];
                const filterList = copyTask.filter((item) => item.id !== updateItem.id);
                setTasks((prevTask) => [...filterList,obj]);
                setUpdateItem(null);
            } else {
                const obj = {
                    title: value,
                    status: TODO,
                    id: Date.now()
                }
                setTasks((prevTasks) => [...prevTasks, obj]);
            }    
            setValue('')
        }
     }
     const handleDrag = (e, task) => {
        setDragTask(task);
     }
     const handleDragNDrop = (status) => {
        let copyTask = [...tasks];
        copyTask = copyTask.map((item) => {
         if(dragTask.id === item.id) {
            item.status = status;
         }  
         return item;
        });
        setTasks(copyTask);
        setDragTask(null);
     }
     const handleOnDrop = (e) => {
      const status  = e.target.getAttribute('data-status');
      console.log('dropping', status);
      if (status === TODO){
        handleDragNDrop(TODO);
      }else if (status===DOING){
        handleDragNDrop(DOING);
      }else if (status === DONE){
        handleDragNDrop(DONE);
      }
     }
     const onDragOver = (e) => {
        e.preventDefault();
     }
   const deleteTask = (item) => {
    let copyTask = [...tasks];
    copyTask = copyTask.filter((task)=> task.id != item.id);
    setTasks(copyTask);
   }
    const updateTask = (task) => {
        setUpdateItem(task);
        setValue(task.title);
    }
  return (
    <>
      <h1>Task Manager</h1>
      <input type="text"  className='inputstyle'
       onChange={handleChange} 
       value={value}
        onKeyDown={handleKeyDown}/>
      <div className='board'>
        <div className='todo' 
        data-status={TODO}
        onDrop={handleOnDrop}
        onDragOver={onDragOver}
        >
            <h1 className='todo-col'>Todo</h1>
            {
                tasks.length > 0 && tasks.map((task) => (
                   task.status === TODO && <div 
                   draggable onDrag={(e)=>handleDrag(e,task)}
                   key={task.id} className='task-item'>
                {task.title}
                <div className='btns'>
                    <span className='btn' onClick={()=>updateTask(task)}>✍🏻</span>
                    <span className='btn' onClick={(e) => deleteTask(task)}>❌</span>
                </div>
            </div>
                ))
            }
        </div>
        <div className='doing'
         data-status={DOING}
         onDrop={handleOnDrop}
         onDragOver={onDragOver}
        >
            <h1 className='doing-col'>Doing</h1>
            {
                tasks.length > 0 && tasks.map((task) => (
                   task.status === DOING && <div 
                   draggable onDrag={(e)=>handleDrag(e,task)}
                   key={task.id} className='task-item'>
                {task.title}
                <div className='btns'>
                    <span className='btn' onClick={()=>updateTask(task)}>✍🏻</span>
                    <span className='btn' onClick={(e) => deleteTask(task)}>❌</span>
                </div>
            </div>
                ))
            }
        </div>
        <div className='done'
         data-status={DONE}
         onDrop={handleOnDrop}
         onDragOver={onDragOver}
        >
            <h1 className='done-col'>Done</h1>
            {
                tasks.length > 0 && tasks.map((task) => (
                   task.status === DONE && <div 
                   draggable onDrag={(e)=>handleDrag(e,task)}
                   key={task.id} className='task-item'>
                {task.title}
                <div className='btns'>
                    <span className='btn' onClick={()=>updateTask(task)}>✍🏻</span>
                    <span className='btn' onClick={(e) => deleteTask(task)}>❌</span>
                </div>
            </div>
                ))
            }
        </div>
      </div>
    </>
  );
}

export default Todo;
