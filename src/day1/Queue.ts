type Node<T> = {
    value: T,
    next?: Node<T>,
}

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    // Enqueue: The ability to add the item in the end and update the tail to the ended item.
    enqueue(item: T): void {
        const node = {value: item} as Node<T>;
        this.length++;
        if (!this.tail) {
            this.tail = this.head = node;
            return
        }

        this.tail.next = node;
        this.tail = node;
}

    // Dequeue: The ability to remove an item from the front or remove head from a queue.
    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        this.length--;
        const head = this.head;
        this.head = this.head.next;

        // Free memory
        head.next = undefined;

        return head.value;
}

    // Peek: The ability to see what is my first element without poping out.
    peek(): T | undefined {
        return this.head?.value;
}
}