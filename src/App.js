
import './App.css';

import UpdateContent from './components/UpdateContent';
import CreateContent from "./components/CreateContent";
import Header from "./components/Header";
import Article from "./components/Article"
import Nav from "./components/Nav" 
import Control from "./components/Control"
import React, {useState} from "react";

function App() {
  const [selected_id, setSelect_id] = useState(0);
  let _title, _desc = null;
  let _article = null;
  let getReadContent = () => {
    let i = 0;
    while(i < contents.length){
      var data = contents[i];
      if(contents[i].id===selected_id){
        _title = contents[i].title;
        _desc = contents[i].desc;
        break;
      }
      i ++;
    }
    return data;
  }

  const [contents, setContents] = useState([
    {id:1, title:'HTML', desc:'HTML is for Information'},
    {id:2, title:'CSS', desc:'CSS is for Design'},
    {id:3, title:'JavaScript', desc:'JavaScript is for Interactive'},
  ]);
  const[subject, setSubject] = useState({
    title:'Web', sub: 'World Wide Web'
  });
  const [mode, setMode] = useState('read');
  console.log(setMode);
  const [welcome, setWelcome] = useState({
    title: 'Welcome', desc: 'Welcome React'
  })


  if(mode === 'welcome'){
    _title = welcome.title;
    _desc = welcome.desc;
    _article = <Article title={_title} desc={_desc}/>
  }else if(mode === 'read'){
    let i = 0;
    while(i < contents.length){
      var data = contents[i];
      if(contents[i].id === selected_id){
        _title = contents[i].title;
        _desc = contents[i].desc;
        break;
      }
      i++
    }
    _article = <Article title={_title} desc={_desc}/>
    _title = contents[0].title;
    _desc = contents[0].desc;
  }else if(mode === 'create'){
    _article = <CreateContent
    onSubmit = {(_title, _desc)=>{
      console.log(_title, _desc);
      let max_content_id = contents.length + 1;
      setContents([
        ...contents,{
          id: max_content_id,
          title:_title,
          desc: _desc
        }
      ]);
    }}>
    </CreateContent>
  }else if(mode === 'update'){
    let _content = getReadContent();
    _article = <UpdateContent
    data = {_content}
    onSubmit={(_title, _desc)=>{
      console.log(_title,_desc);
      contents[selected_id-1].title = _title;
      contents[selected_id-1].desc = _desc
    }}>

    </UpdateContent>
  }
  // const [title, setTitle] = useState('WEB');
  // const [sub, setSub] = useState('World Wide Web');


  return(
    <div className="App">
        <Header
         title={subject.title} sub={subject.sub}
         onChangePage = {()=>{
          setMode('welcome')
         }}
        />
        <Nav 
        data={contents}
        onChangePage={(id)=>{
          setMode('read');
          setSelect_id(id);
        }}/>
        <Control
        onChangeMode={(mode)=>{
          setMode(mode);
          if(mode === "delete"){
            let _contents = Array.from(contents);
            console.log('delete: selected_id: '+selected_id);
            if(window.confirm('Really Delete????????')){
              console.log('DeleteContent: selected_id: '+selected_id);
              _contents.splice(selected_id-1,1);
              setContents(_contents);
              setMode('Welcome');
            }
          }
        }
      }
        />
        {/* <Article title={_title}
        desc={_desc}/> */}
        {_article}
      
    </div>
    
    )
}

export default App;
