class NodeItem {
    constructor( public value: number,
        public left?: any,
        public right?: any
        ){}

        nodeSolution(){
            let isValid = this.isValidBST(this,-Infinity,Infinity)
            return isValid
        }

        isValidBST(node: this, low: number,high: number){
            if(!node){
                return true
            }
            let val = node.value
            if( (val > low && val < high) 
            && (this.isValidBST(node.left,low,val)
            && (this.isValidBST(node.right,val,high))
            ) ){
                return true
            }
            return false;
            
        }
}

let node = new NodeItem(5)
node.left =  new NodeItem(4)
node.right = new NodeItem(7)
let valid = node.nodeSolution() // true

node.right.left = new NodeItem(2)
let valid = node.nodeSolution() // false
