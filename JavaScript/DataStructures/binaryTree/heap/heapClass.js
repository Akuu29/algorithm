export class Heap {
    static left(i) {
        return 2 * i + 1;
    }
    static right(i) {
        return 2 * i + 2;
    }
    static parent(i) {
        // i番目の葉ノードの親ノードのインデックス
        return Math.floor((i - 1) / 2);
    }
    static maxHeapify(intArr, i) {
        let left = Heap.left(i);
        let right = Heap.right(i);

        let biggest = i;
        if(intArr[left] > intArr[biggest]) biggest = left;
        if(intArr[right] > intArr[biggest]) biggest = right;

        if(biggest != i) {
            let temp = intArr[i];
            intArr[i] = intArr[biggest];
            intArr[biggest] = temp;
            Heap.maxHeapify(intArr, biggest);
        }
    }
    static buildMaxHeap(intArr) {
        let middle = Heap.parent(intArr.length);
        for(let i = middle; i >= 0; i--) Heap.maxHeapify(intArr, i);
    }
}