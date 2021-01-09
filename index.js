class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
​
/*
  Given an array, creates the linked list and returns the head node.
*/
const generateLinkedList = (arr) => {
  if (!arr || arr.length === 0) {
    return null;
  }
  const head = new Node(arr[0]);
  let prev = head;
  for (let i = 1; i < arr.length; i++) {
    let temp = new Node(arr[i])
    prev.next = temp;
    prev = temp;
  }
  return head;
}
​
/*
  It should print an array of numbers of given linked list
*/
const printArrayOfList = (node) => {
  const result = []; // 1
  while(node) {
    result.push(node.val);
    node = node.next; // 1
  }
  console.log(result); // 1
}
// Time Complexity O(n)
// Space Complexity O(n)
​
const reverseLinkedListIterative = (node) => {
  let prev = null; // 1
  let next; // 1
​
  while(node) {
    next = node.next;
    node.next = prev;
    prev = node;
    node = next;
  }
  return prev;
}
// Time Complexity O(n)
// Space Complexity O(1)
​
const reverseLinkedListRecursive = (prev, node) => {
  if (!node) {
    return prev;
  }
  const head = reverseLinkedListRecursive(node, node.next);
  node.next = prev;
  return head;
}
​
const head = generateLinkedList([1,2,3,4,5,6,7,10,11,12]);
// const reversedHead = reverseLinkedListIterative(head);
// const reversedList = reverseLinkedListRecursive(null, head);
// // console.log(reversedList);
// printArrayOfList(reversedList);
​
​
var maxProfit = function(prices) {
  let max = 0; // 1
  for (var i = 0; i < prices.length; i++) {
    for (var j = i + 1; j < prices.length; j++) {
      max = Math.max(prices[j] - prices[i], max); // 1
    }
  }
  return max;
};
​
// Time Complexity O(n^2)
// Space Complexity O(1)
​
var maxProfit = function(prices) {
  let min = prices[0]; // 1 space
  let max = 0; // 1 space 
​
  prices.forEach(price => {
    max = Math.max(price - min); // 1
    min = Math.min(min, price); // 1
  }); // n times
  return max;
};
// Time Complexity O(n)
// Space Complexity O(1)
​
// Assume N + M is O(N)
var merge = function(nums1, m, nums2, n) {
    let j = 0;
    for (let i = m; i < nums1.length; i++) {
        nums1[i] = nums2[j];
        j++;
    } // O(N)
    nums1.sort((a, b) => a - b); // O(nlogn)
};
​
// Time Complexity O(n) + O(nlogn) => O(nlogn)
// Space Complexity O(1)
