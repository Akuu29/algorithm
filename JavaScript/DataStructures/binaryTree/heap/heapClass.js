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
        if(left < intArr.length && intArr[left] > intArr[biggest]) biggest = left;
        if(right < intArr.length && intArr[right] > intArr[biggest]) biggest = right;

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
    static minHeapify(intArr, i) {
        let left = Heap.left(i);
        let right = Heap.right(i);

        let smallest = i;
        if(intArr[left] < intArr[smallest]) smallest = left;
        if(intArr[right] < intArr[smallest]) smallest = right;

        if(smallest != i) {
            let temp = intArr[i];
            intArr[i] = intArr[smallest];
            intArr[smallest] = temp;
            Heap.minHeapify(intArr, smallest);
        }
    }
    static heapSort(intArr) {
        Heap.buildMaxHeap(intArr);

        let heapEnd = intArr.length - 1;
        while(heapEnd > 0) {
            let temp = intArr[heapEnd];
            intArr[heapEnd] = intArr[0];
            heapEnd--;
            Heap.maxHeapify(intArr, hepaEnd, 0);
        }
    }
}