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
    this.arrs=[];
    this.rows=[];
    this.cols=[];
  }
  //takes in string, array of strings
  addRow(Key,Values){
    if(Array.isArray(Key)||!Array.isArray(Values))
      return console.error('i need NOURISHMENT',Key,Values)
    if(!rows[Key]) //{
      rows[Key]=Values
      //rows[Key]=[]
      //for (value in Values){
      //  rows[Key].push(new Element(rows[Key],col[value],true));
      //}
//here's the part that worries me,
//shouldn't that be an array
//of Elements, so it can have
//parenting?
      for(value in Values){//impcol
        if(!cols[value])
          cols[value]=[Key]
        else
          cols[value].push(Key)
      }
    }
    else{//rows has Key
      for(value in Values){
        //implement
        if(!cols[value])//impcol
          cols[value]=[Key]
        else
          col[value].push(Key)
      }
    }
  }
  addCol(Keys,Value){
    
  }
  addCrd()
  //DEL or SUB for removal? rem?
  //del b/c it's computer science or we can just look
  subRow(Key, Values){
  }																			
  subCol()
  arrs
  rows
  cols
}