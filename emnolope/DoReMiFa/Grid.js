class Element{
  constructor(row,col,data){
    this.row=row;
    this.col=col;
    this.data=data;
  }
  getMama(){return this.row}
  getPapa(){return this.col}
  getBaby(){return this.data}
  setBaby(data){this.data=data}
  //don't use the get set, just grab directly
}
class Grid{
  constructor(){
    this.rows={};
    this.cols={};
  }
  //Pay attention to the plural and singular
  addRow(Key,Values){
    if(!this.rows[Key]){
      this.makeRow(Key);
      for(const value of Values)
        this.rows[Key][value]={}
    }
    else
      for(const value of Values)
        this.rows[Key][value]={};
    for(const value of Values){
      if(!this.cols[value])
        this.cols[value]={}
      this.cols[value][Key]={}
    }
  }
  addCol(Keys,Value){
    if(!this.cols[value]){
      this.makeCol(Value);
      for(key of Keys)
        this.cols[value][key]={}
    }
    else
      for(key of Keys)
        this.cols[value][key]={}
    for(key in Keys){
      if(!this.rows[key])
        this.rows[key]={}
      this.rows[key][value]={}
    }
  }
  addCrd(Key,Value){
    if(!this.rows[key])
      this.rows[key]={}
    this.rows[key][value]={}
    if(!this.cols[value])
      this.cols[value]={}
    this.cols[value][key]={}
  }
  subRow(Key,Values){
    if(Values==null)
      Values=Object.keys(this.rows[Key]);
    if(this.rows[Key])
      this.delRow(Key)
    for(const value of Values){
      if(this.cols[value][Key])
        delete this.cols[value][Key]
      if(Object.keys(this.cols[value]).length===0)
        this.delCol(value)
    }
  }
  subCol(Keys,Value){
    if(Keys==null)
      Keys=Object.keys(this.cols[Value])
    if(this.cols[Value])
      this.delCol(Value)
    for(const key in Keys){
      if(this.rows[key][Value])
        delete this.rows[key][Value]
      if(Object.keys(this.rows[key]).length===0)
        this.delRow(Key)
    }
  }
  makeRow(Key){
    this.rows[Key]={};
  }
  makeCol(Value){
    this.cols[Value]={};
  }
  delRow(Key){
    delete this.rows[Key]
  }
  delCol(Value){
    delete this.cols[Value]
  }
}
noteGrid=new Grid();
noteGrid.addRow('KeyA',['C4','E4','G4']);
noteGrid.addRow('KeyG',['G4','B4','D5']);
