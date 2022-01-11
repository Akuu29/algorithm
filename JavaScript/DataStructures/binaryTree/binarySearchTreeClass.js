import {Binarytree} from "./binaryTreeClass";

export class BinarySearchTree {
    constructor(intArr) {
        let sortedList = intArr.sort((a, b) => {return a - b;});
        this.root = BinarySearchTree.sortedArrayToBST(sortedList);
    }

    static sortedArrayToBST(sortedIntArr) {
        if(!sortedIntArr.length) return null;
        return BinarySearchTree.sortedArrayToBSTHelper(sortedIntArr, 0, sortedIntArr.length - 1);
    }

    static sortedArrayToBSTHelper(sortedIntArr, start, end) {
        if(start == end) return new new Binarytree(sortedIntArr[start], null, null);

        let mid = Math.floor((start + end) / 2);

        let left = null;
        if(mid - 1 >= start) left = BinarySearchTree.sortedArrayToBSTHelper(sortedIntArr, start, mid-1);

        let right = null;
        if(mid + 1 <= end) right = BinarySearchTree.sortedArrayToBSTHelper(sortedIntArr, mid + 1, end);

        let root = new Binarytree(sortedIntArr[mid], left, right);

        return root;
    }
}