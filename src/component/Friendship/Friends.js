import React, { useState, useEffect } from 'react'
import './style.css';


const getLocalData = () => {
    const list = localStorage.getItem("mytodo");
    if (list) {
        return JSON.parse(list);
    } else {
        return [];
    }
}

const Friends = () => {
    const [inputdata, setInputdata] = useState("");
    const [item, setItem] = useState(getLocalData());
    const [isEditItem, setIsEditItem] = useState("");
    const [togglButton, settoggleButton] = useState(false);
    const [SourceValue, setSourceValue] = useState("");
   const [Destination, setDestination] = useState("");
const [Target, setTarget] = useState("");
   

   
    const addItem = () => {
        if (!inputdata) {
            alert("please fill the data");
        } else if (inputdata && togglButton) {
            setItem(
                item.map((curElem) => {
                    if (curElem.id === isEditItem) {
                        return { ...curElem, name: inputdata }
                    }
                    return curElem;
                })
            )
            setInputdata("");
            setIsEditItem(null);
            settoggleButton(false);
        }

        else {
            const myNewInputData = {
                id: new Date().getTime().toString(),
                name: inputdata,
            };
            setItem([...item, myNewInputData]);
            setInputdata("");
        }
    };

    const deleteItem = (index) => {
        const updatedItem = item.filter((curElem) => {
            return curElem.id !== index;
        }
        );
        setItem(updatedItem);
    };
    const removeAll = () => {
        setItem([]);
    };

    useEffect(() => {

        localStorage.setItem("mytodo", JSON.stringify(item));

    }, [item])

    const editItem = (index) => {
        const item_todo_edited = item.find((curElem) => {
            return curElem.id === index;
        }
        );
        setInputdata(item_todo_edited.name);
        console.log(setInputdata);
        setIsEditItem(index);
        settoggleButton(true);
    }
    const handleSource = (e) => {
        setDestination(e);
       console.log(e);
      
        
    }
    const handleDestination = (e) => {
        setSourceValue(e);
       console.log(e);
      
        
    }
    const addFriendship=(SourceValue,Destination)=>{
       
           
            if (SourceValue==Destination ) {
               if(!SourceValue=="" && !Destination=="")
                alert("Select friend Other than yourself");
               
             } 

              else if(SourceValue=="" && Destination==""){
                 alert("please select friend");
                // setItem(
                //     item.map((curElem) => {
                //         if (curElem.id === isEditItem) {
                //             return { ...curElem, name: inputdata }
                //         }
                //         return curElem;
                //     })
                // )
                // setInputdata("");
                // setIsEditItem(null);
                // settoggleButton(false);
             }
            else if(!SourceValue==Destination){

               alert("You Added Friend Successfully");
               
               let v;
               let e;
               let adjList;
               function Graph(vertices)
{
    // initialise vertex count
        v = vertices;
        initAdjList();
        // initialise adjacency list
        function initAdjList()
{
    adjList = new Array(v);
  
        for (let i = 0; i < v; i++) {
            adjList[i] = [];
        }
        function addEdge(u,v)
{
    // Add v to u's list.
    let result
        result = adjList[u].push(v);
        console.log(result);
        Graph(4);
    addEdge('sameen','sahil' );
    addEdge('sahil', 'adi');
    addEdge('sameen', 'adi');
    addEdge('sahil', 'sameen');
    addEdge('adi', 'sameen');
    addEdge('adi', 'sahil');
     
    // arbitrary source
    let s = SourceValue;
     
    // arbitrary destination
    let d = Destination;
     
    console.log(
    "Following are all different paths from "
    + s + " to " + d+"<Br>");
    printAllPaths(s, d);
    
}
}
}
            


        }
 // Prints all paths from
    // 's' to 'd'
    function printAllPaths(s,d)
    {
         let isVisited = new Array(v);
         for(let i=0;i<v;i++)
             isVisited[i]=false;
            let pathList = [];
      
            // add source to path[]
            pathList.push(s);
      
            // Call recursive utility
            printAllPathsUtil(s, d, isVisited, pathList);
    }
     
    // A recursive function to print
        // all paths from 'u' to 'd'.
        // isVisited[] keeps track of
        // vertices in current path.
        // localPathList<> stores actual
        // vertices in the current path
    function printAllPathsUtil(u,d,isVisited,localPathList)
    {
        if (u == (d)) {
                document.write(localPathList+"<br>");
                // if match found then no need to 
                // traverse more till depth
                return;
            }
      
            // Mark the current node
            isVisited[u] = true;
      
            // Recur for all the vertices
            // adjacent to current vertex
            for (let i=0;i< adjList[u].length;i++) {
                if (!isVisited[adjList[u][i]]) {
                    // store current node
                    // in path[]
                    localPathList.push(adjList[u][i]);
                    printAllPathsUtil(adjList[u][i], d, 
                    isVisited, localPathList);
      
                    // remove current node
                    // in path[]
                    localPathList.splice(localPathList.indexOf
                    (adjList[u][i]),1);
                }
            }
      
            // Mark the current node
            isVisited[u] = false;
    }
     
   
    
            }
}

   
return (
        <>
            <div className='main-div'>
                <div className='child-div'>
                    <figure>
                        <img src='../images/R.png' alt="todologo" />
                        <figcaption>Add Friends ✌ </figcaption>
                    </figure>
                    <div className='addItems'>
                        <input type="text" placeholder='✍ Add Friends' className='form-control' value={inputdata} onChange={(event) => setInputdata(event.target.value)} />
                        {
                            togglButton ? (
                                <i class="fa fa-edit add-btn" onClick={addItem} ></i>) :
                                (<i class="fa fa-plus add-btn" onClick={addItem} ></i>)
                        }

                    </div>

                    <div className='showItems'>
                        {item.map((curElem) => {
                            return (
                                <div className='eachItem' key={curElem.id}>
                                    <h3>{curElem.name}</h3>
                                    <div className='todo-btn'>
                                        <i className="far fa-edit add btn" onClick={() => editItem(curElem.id)}></i>
                                        <i className="far fa-trash-alt  add btn" onClick={() => deleteItem(curElem.id)}></i>
                                    </div>
                                </div>
                            );
                        })}
                        </div>



                    <div className='showItems'>
                        <div className="dropdown ">
                            {/* <button className="dropbtn">Person1</button>
                            <div className="dropdown-content ">
                                <button className='color' value={curElem}  onClick={()=>addSource(curElem.name)}> {curElem.name} </button><br></br>
                                <button className='color' onClick={addSource} value={Source}>Shahzad</button><br></br>
                                <button className='color' onClick={addSource} value={Source}>Sameer</button>
                            </div> */}
                              <button className="dropbtn " >Person1</button>
                              <div className="dropdown-content  " >
                             {item.map((curElem) => {
                            return (
                                <div className='eachItem sam' key={curElem.id}>
                                    <h3 onClick={()=>handleSource(curElem.name)} >{curElem.name}</h3>
                                   
                                </div>
                            );
                        })}
                        </div>
                        </div>

                        <div className="dropdown">
                            <button className="dropbtn">Person2</button>
                            <div className="dropdown-content">
                            {/* {item.map((curElem) => {
                            return (
                                <div className='eachItem sam' key={curElem.id}>
                                    <h3 className=''>{curElem.name}</h3>
                                   
                                </div>
                            );
                        })} */}
                          {item.map((curElem) => {
                            return (
                                <div className='eachItem sam' key={curElem.id}>
                                    <h3 onClick={()=>handleDestination(curElem.name)} >{curElem.name}</h3>
                                   
                                </div>
                            );
                        })}
                            </div>
                        </div>
                       
                     

                        <button className='btn effect04 ar' data-sm-link-text="Add Friends" onClick={()=>addFriendship(SourceValue,Destination)}>
                            <span >Add Friendship</span>
                        </button>
                        <button className='btn effect04 sr' data-sm-link-text="View Relation" onClick={removeAll}>
                            <span >View Relation</span>
                        </button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Friends;
