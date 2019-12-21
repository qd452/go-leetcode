/*
有 TODO的问题，都值得再做一遍。
*/



/**
 * LC-344
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    if (s.length) {
        let p1 = 0,
            p2 = s.length - 1;
        while (p1 < p2) {
            [s[p1], s[p2]] = [s[p2], s[p1]];
            p1 += 1;
            p2 -= 1;
        }
    };
};


/**
 * 104. Maximum Depth of Binary Tree
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    let dfs = function(root) {
        if (root === null)
            return 0;
        else {
            return Math.max(dfs(root.left), dfs(root.right)) + 1;
        }
    }

    return dfs(root);
};

/*
136. Single Number
Given a non-empty array of integers, every element appears twice 
except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. 
Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1
Example 2:

Input: [4,1,2,1,2]
Output: 4

Python one-liner:
from functools import reduce
reduce(lambda x,y: x^y, arr)
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    return nums.reduce((accumulator, currValue) => {
        return accumulator ^ currValue;
    });

};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * LC-94
 * @param {TreeNode} root
 * @return {number[]}
 */


var inorderTraversal = function(root) {
    if (!root) return [];
    let q = [],
        ans = [];
    q.push(root);

    let newhead = true;

    while (q.length > 0) {
        if (newhead) {
            let node = q[q.length - 1];
            while (node.left !== null) {
                q.push(node.left);
                node = node.left;
            };
        }


        let endnode = q.pop();
        ans.push(endnode.val);

        if (endnode.right !== null) {
            q.push(endnode.right);
            newhead = true;
        } else
            newhead = false;
    }

    return ans;
};

/**
 * 46. Permutations
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let ans = [];
    let l = nums.length;

    let helper = function(nums, rslt = []) {

        if (rslt.length == l) {
            // console.log(rslt);
            ans.push(rslt.splice());
        } else {
            for (let i = 0; i < nums.length; i++) {
                let n = nums[i];
                rslt.push(n);
                nums.splice(i, 1);
                helper(nums, rslt);
                nums.splice(i, 0, n);
                rslt.pop();
            }
        }
    }

    helper(nums);

    return ans;


};

/**
 * 238. Product of Array Except Self
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let ans = [1];
    for (let i = 0; i < nums.length - 1; i++) {
        ans[i + 1] = nums[i] * ans[i];
    }


    let init = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        ans[i] *= init;
        init *= nums[i];
    }

    return ans;
};

/**
 * 22. Generate Parentheses
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let ans = [];

    let helper = function(s = '', left = 0, right = 0) {
        if (s.length === n * 2)
            ans.push(s)
        else {
            if (left < n)
                helper(s + '(', left + 1, right)
            if (left > right)
                helper(s + ')', left, right + 1)
        }
    }

    helper();
    return ans;
};

/**
 * 347. Top K Frequent Elements
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let c = {};
    for (let num of nums) {
        c[num] = (c[num] + 1) || 1;
    }
    return Object.keys(c).sort((a, b) => c[b] - c[a]).slice(0, k);
};

/**
 * 206. Reverse Linked List
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let pre = null;
    let tmp;
    while (head !== null) {
        tmp = head.next;
        head.next = pre;
        pre = head;
        head = tmp;
    }

    return pre;

};

/**
 * 283. Move Zeroes
 * 两种思路 一个是记住非0的最后一个，把所有非零的移动到前面，后面的数字全部重写为0
 * 另一种是我刚刚想的，记住第一个0的index，然后每当遇到非0的数，就和0的start index交换，然后start index++
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let start = -1,
        p = 0;

    while (p < nums.length) {
        if (nums[p] != 0) {
            if (start >= 0) {
                [nums[p], nums[start]] = [nums[start], nums[p]];
                start++;
            }
        } else {
            if (start == -1)
                start = p;
        }
        p++;
        // console.log(nums, p);
    }

};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    //two pointers
    let idx = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[idx++] = nums[i];
        }
    }

    for (i = idx; i < nums.length; i++) {
        nums[i] = 0;
    }

    return nums;
};

/**
 * 237. Delete Node in a Linked List
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let ans = [];

    function helper(path = [], start = 0) {
        ans.push(path.slice())
        for (let i = start; i < nums.length; i++) {
            path.push(nums[i]);
            helper(path, i + 1);
            path.pop();
        }
    }

    helper();

    return ans;
};

/*
Given an array of size n, find the majority element. 
The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority 
element always exist in the array.

Example 1:

Input: [3,2,3]
Output: 3
Example 2:

Input: [2,2,1,1,1,2,2]
Output: 2
*/
/**
 * 169. Majority Element
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement_map = function(nums) {
    let counter = {};
    // note, There is no way to stop or break a forEach() loop other than by throwing an exception.
    for (let n of nums) {
        counter[n] = (counter[n] + 1) || 1;
        if (counter[n] > Math.floor(nums.length / 2))
            return n;
    }
};

/*
Moores' voting algo
*/
var majorityElement = function(nums) {
    let candidate = null,
        counter = 0;

    for (let n of nums) {
        if (counter === 0)
            candidate = n;
        counter += (n === candidate ? 1 : -1);
    }

    return candidate;
};

let nums = [3, 2, 3];
nums = [1, 1, 2, 2, 1]
let r = majorityElement(nums);
console.log(r);

/*
242. Valid Anagram

Given two strings s and t , write a function to determine 
if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?
*/


/**
 * 242. Valid Anagram
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let counter_s = {},
        counter_t = {};
    for (let i of s) {
        counter_s[i] = (counter_s[i] + 1) || 1;
    }
    for (let i of t) {
        counter_t[i] = (counter_t[i] + 1) || 1;
    }
    // console.log(counter_t, counter_s);
    // How to check arrays are equal
    // https://stackoverflow.com/questions/3115982/how-to-check-if-two-arrays-are-equal-with-javascript
    if (Object.keys(counter_s).sort().toString() !==
        Object.keys(counter_t).sort().toString())
        return false;

    // Note: iterate Object must use in; only use of on iterable
    for (let k in counter_s) {
        if (counter_s[k] !== counter_t[k])
            return false;
    }
    return true;
};


var isAnagram2 = function(s, t) {
    if (s.length !== t.length) return false;

    const sCharCounts = {};

    for (let i = 0; i < s.length; i++) {
        const sChar = s[i];
        sCharCounts[sChar] = sCharCounts[sChar] + 1 || 1;
    }

    for (let i = 0; i < t.length; i++) {
        const tChar = t[i];
        // if tChar not in s, sCharCounts[tChar] is undefined, !undefined return true
        // if tChar is more then tChar in s, sCharCounts[tChar] is 0, !0 return true
        if (!sCharCounts[tChar]) {
            return false;
        } else {
            sCharCounts[tChar]--;
        }
    }

    return true;
};

function isAnagram3(s, t) {
    const map = {};
    s.split('').map(c => map[c] = map[c] ? map[c] + 1 : 1);
    t.split('').map(c => map[c] = map[c] ? map[c] - 1 : -1);
    return Object.keys(map).every(k => map[k] === 0);
}

let s = 'abb',
    t = 'bab';
r = isAnagram(s, t);
console.log(r);


/*
217. Contains Duplicate

Given an array of integers, find if the array contains any duplicates.

Your function should return true if any 
value appears at least twice in the array, and
 it should return false if every element is distinct.

Example 1:

Input: [1,2,3,1]
Output: true
Example 2:

Input: [1,2,3,4]
Output: false
Example 3:

Input: [1,1,1,3,3,4,3,2,4,2]
Output: true
*/
/**
 * 217. Contains Duplicate
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let s = new Set();
    for (let n of nums) {
        if (s.has(n))
            return true;
        s.add(n);
    }
    return false;
};

var containsDuplicate2 = function(nums) {
    return new Set(nums).size !== nums.length;
}

/*
122. Best Time to Buy and Sell Stock II

Say you have an array for which the ith element is the price of 
a given stock on day i.

Design an algorithm to find the maximum profit. 
You may complete as many transactions as you like 
(i.e., buy one and sell one share of the stock multiple times).

Note: You may not engage in multiple transactions 
at the same time (i.e., you must sell the stock before you buy again).

Example 1:

Input: [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
             Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
Example 2:

Input: [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
             Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
             engaging multiple transactions at the same time. You must sell before buying again.
Example 3:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
*/
/**
 * 122. Best Time to Buy and Sell Stock II
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let priceL = prices.length;
    let hold = -prices[0],
        sell = 0;
    for (let i = 1; i < priceL; i++) {
        sell = Math.max(sell, prices[i] + hold);
        hold = Math.max(sell - prices[i], hold);
        // console.log(i, prices[i], hold, sell);
    }

    return sell;
};

var maxProfit2 = function(prices) {
    // very nice and easy to understand sol
    var profit = 0;
    for (var i = 0; i < prices.length - 1; i++) {
        var probableProfit = prices[i + 1] - prices[i];
        profit = Math.max(probableProfit + profit, profit);
    }
    return profit;
};

// let prs = [7, 1, 5, 3, 6, 4];
let prs = [1, 2, 3, 4, 5];
// let prs = [7,6,4,3,1];
r = maxProfit(prs);
console.log('max profit', r);

/*
171. Excel Sheet Column Number
Given a column title as appear in an Excel sheet, return its corresponding column number.

For example:

    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28 
    ...
Example 1:

Input: "A"
Output: 1
Example 2:

Input: "AB"
Output: 28
Example 3:

Input: "ZY"
Output: 701
*/
/**
 * 171. Excel Sheet Column Number
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    // charCodeAt() is UTF-16, codePointAt() is Unicode.
    let ans = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        // console.log(s[i]);
        ans += (s[i].charCodeAt(0) - 'A'.charCodeAt(0) + 1) * Math.pow(26, (s.length - i - 1));
    }
    return ans;
};

s = 'ZY';
r = titleToNumber(s);
console.log(r);

/*
230. Kth Smallest Element in a BST

Given a binary search tree, write a function 
kthSmallest to find the kth smallest element in it.

Note: 
You may assume k is always valid, 1 ≤ k ≤ BST's total elements.

Example 1:

Input: root = [3,1,4,null,2], k = 1
   3
  / \
 1   4
  \
   2
Output: 1
Example 2:

Input: root = [5,3,6,2,4,null,null,1], k = 3
       5
      / \
     3   6
    / \
   2   4
  /
 1
Output: 3
Follow up:
What if the BST is modified 
(insert/delete operations) often and you need
 to find the kth smallest frequently?
  How would you optimize the kthSmallest routine?
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 230. Kth Smallest Element in a BST
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
var kthSmallest = function(root, k) {
    let ans = null;
    let dfs = function(root) {
        // console.log('dfs', root ? root.val : null, k);
        if (root) {
            dfs(root.left);
            k -= 1;
            if (k === 0)
                ans = root.val;
            dfs(root.right);
        }
    }

    dfs(root, k);

    return ans;
};

var kthSmallest_iterative = function(root, k) {
    let q = [];
    while (true) {
        while (root) {
            q.push(root);
            root = root.left;
        }
        let node = q.pop();
        k -= 1;
        if (k == 0)
            return node.val;
        root = node.right;
    }
};

/* 
If you put the keyword new in front of a function call, 
the function is treated as a constructor.
*/
let root = new TreeNode(2);
let n1 = new TreeNode(1);
let n2 = new TreeNode(3);
root.left = n1;
root.right = n2;
console.log(root.left);

r = kthSmallest(root, 2);
let r2 = kthSmallest_iterative(root, 2);
console.log(r, r2, r === r2);

/*
371. Sum of Two Integers

Calculate the sum of two integers a and b, 
but you are not allowed to use the operator + and -.

Example 1:

Input: a = 1, b = 2
Output: 3
Example 2:

Input: a = -2, b = 3
Output: 1
*/
/**
 * 371. Sum of Two Integers
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    let i = 0;
    while (b) {
        let carry = a & b;
        a ^= b;
        b = carry << 1;
    }
    return a;
};

/**
    Given the sorted array: [-10,-3,0,5,9],

    One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

          0
         / \
       -3   9
       /   /
     -10  5
 */
/**
 * 108. Convert Sorted Array to Binary Search Tree
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if (nums.length == 0)
        return null;

    let mid = Math.floor(nums.length / 2);
    // console.log(nums, nums[mid]);
    let node = new TreeNode(nums[mid]);
    node.left = sortedArrayToBST(nums.slice(0, mid));
    node.right = sortedArrayToBST(nums.slice(mid + 1));
    return node;
};

nums = [-10, -3, 0, 5, 9];
let head = sortedArrayToBST(nums);
console.log(head.val);
console.log(head.left.val);
console.log(head.right.val);

/*
454. 4Sum II

Given four lists A, B, C, D of integer values, compute how many 
tuples (i, j, k, l) there are such that A[i] + B[j] + C[k] + D[l] 
is zero.

To make problem a bit easier, 
all A, B, C, D have same length of N where 0 ≤ N ≤ 500. 
All integers are in the range of -2**28 to 2**28 - 1 and the 
result is guaranteed to be at most 2**31 - 1.

Example:

Input:
A = [ 1, 2]
B = [-2,-1]
C = [-1, 2]
D = [ 0, 2]

Output:
2

Explanation:
The two tuples are:
1. (0, 0, 0, 1) -> A[0] + B[0] + C[0] + D[1] = 1 + (-2) + (-1) + 2 = 0
2. (1, 1, 0, 0) -> A[1] + B[1] + C[0] + D[0] = 2 + (-1) + (-1) + 0 = 0
*/
/**
 * 454. 4Sum II
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
    let dct = new Object();
    for (let i of A) {
        for (let j of B) {
            let tmp = i + j;
            dct[tmp] = dct[tmp] + 1 || 1;
        }
    }
    // console.log(dct);
    let ans = 0;
    for (let i of C) {
        for (let j of D) {
            let tmp = -(i + j);
            if (tmp in dct) {
                // console.log(i, j, -(i+j), dct[-i-j]);
                ans += dct[tmp];
            }
        }
    }
    return ans;
};

/*
 * Map version is x3 faster than using Object!!!!!!!!!!!!!
 */
var fourSumCountMapVersion = function(A, B, C, D) {
    let map = new Map();
    for (let i of A) {
        for (let j of B) {
            let tmp = i + j;
            if (map.has(tmp))
                map.set(tmp, map.get(tmp) + 1);
            else
                map.set(tmp, 1);
        }
    }
    // console.log(map);
    let ans = 0;
    for (let i of C) {
        for (let j of D) {
            let tmp = i + j;
            // console.log(-tmp);
            if (map.has(-tmp)) {
                // console.log(i, j, -(i+j), map.get(-tmp));
                ans += map.get(-tmp);
            }
        }
    }
    return ans;
};

let A = [1, 2],
    B = [-2, -1],
    C = [-1, 2],
    D = [0, 2];

r = fourSumCount(A, B, C, D);
r = fourSumCountMapVersion(A, B, C, D);
console.log(r);

/*
87. First Unique Character in a String

Given a string, find the first non-repeating character in it 
and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.
*/

/**
 * 87. First Unique Character in a String
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map = new Map();

    for (let ch of s) {
        if (map.has(ch))
            map.set(ch, map.get(ch) + 1);
        else
            map.set(ch, 1);
    }

    for (let i = 0; i < s.length; i++) {
        if (map.get(s[i]) == 1)
            return i;
    }
    return -1;
};

/*
Note now Object is faster than map!!!

I guess generally Object is faster.
But for 4SumII, the key are numbers which must convert to string
for Object but Map can keep Numbers as the key values. This conversion
to string in 4SumII generally slows down the speed.
*/
var firstUniqCharObject = function(s) {
    let map = new Object();

    for (let ch of s) {
        map[ch] = map[ch] + 1 || 1;
    }

    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] == 1)
            return i;
    }
    return -1;
}

var firstUniqChar_faster = function(s) {
    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        if (s.indexOf(c) == i && s.indexOf(c, i + 1) == -1) {
            return i;
        }
    }
    return -1;
}

/*
287. Find the Duplicate Number

Given an array nums containing n + 1 integers where each 
integer is between 1 and n (inclusive), prove that at least 
one duplicate number must exist. Assume that there is only 
one duplicate number, find the duplicate one.

Example 1:

Input: [1,3,4,2,2]
Output: 2
Example 2:

Input: [3,1,3,4,2]
Output: 3
Note:
You must not modify the array (assume the array is read only).
You must use only constant, O(1) extra space.
Your runtime complexity should be less than O(n2).
There is only one duplicate number in the array, but it could be repeated more than once.
*/
/**
 * 287. Find the Duplicate Number
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let slow = nums[0],
        fast = nums[0];

    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
        // console.log('slow ', slow, 'fast ', fast);
    } while (slow !== fast);
    let start = nums[0];
    // console.log(slow, fast);
    while (start !== slow) {
        start = nums[start];
        slow = nums[slow];
        // console.log(start, slow);
    }
    return start;
};
nums = [1, 3, 4, 2, 2];
// nums = [3,1,3,4,2];
nums = [2, 5, 9, 6, 9, 3, 8, 9, 7, 1];
r = findDuplicate(nums);
console.log(r);

/*
384. Shuffle an Array

Shuffle a set of numbers without duplicates.

Example:

// Init an array with set 1, 2, and 3.
int[] nums = {1,2,3};
Solution solution = new Solution(nums);

// Shuffle the array [1,2,3] and return its result. 
Any permutation of [1,2,3] must equally likely to be 
returned.
solution.shuffle();

// Resets the array back to its original 
configuration [1,2,3].
solution.reset();

// Returns the random shuffling of array [1,2,3].
solution.shuffle();
*/

/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.nums = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.nums;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    let tmp = this.nums.slice(); // NOTE: very important
    let ans = [];
    let randomInt = function(n) {
        return Math.floor(Math.random() * n);
    }
    while (tmp.length > 0) {
        let choice = randomInt(tmp.length);
        ans.push(tmp[choice]);
        tmp.splice(choice, 1);
    }

    return ans;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
nums = [1, 2, 3];
var obj = new Solution(nums);
var p1 = obj.reset();
var p2 = obj.shuffle();
var p3 = obj.reset();
console.log(p1, p2, p3);

/*
 378. Kth Smallest Element in a Sorted Matrix

Given a n x n matrix where each of the rows and columns are
sorted in ascending order, find the kth smallest element in the matrix.

Note that it is the kth smallest element in the sorted order,
 not the kth distinct element.

Example:

matrix = [
   [ 1,  5,  9],
   [10, 11, 13],
   [12, 13, 15]
],
k = 8,

return 13.
Note: 
You may assume k is always valid, 1 ≤ k ≤ n**2.
*/

/**
 * 378. Kth Smallest Element in a Sorted Matrix
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest2DMatrix = function(matrix, k) {
    const bisect_right = function(arr, v) {
        let lo = 0,
            hi = arr.length;
        while (lo < hi) {
            let mid = Math.floor((lo + hi) / 2);
            if (arr[mid] <= v)
                lo = mid + 1;
            else
                hi = mid;
        }
        return lo;
    }
    let n = matrix.length;
    let lo = matrix[0][0],
        hi = matrix[n - 1][n - 1];

    while (lo < hi) {
        let mid = Math.floor((lo + hi) / 2);
        let num = matrix.map(x => bisect_right(x, mid))
            .reduce((a, b) => a + b);
        if (num < k)
            lo = mid + 1;
        else
            hi = mid;
    }

    return lo;
};

let matrix = [
        [1, 5, 9],
        [10, 11, 13],
        [12, 13, 15]
    ],
    k = 2;

r = kthSmallest2DMatrix(matrix, k);
console.log('2d matrix', r);

let arr = [1, 2, 3];
r = arr.map(x => Math.pow(x, 2)).reduce((a, b) => a + b);

/*
328. Odd Even Linked List

Given a singly linked list, group all odd nodes together 
followed by the even nodes. Please note here we are talking 
about the node number and not the value in the nodes.

You should try to do it in place. The program should run 
in O(1) space complexity and O(nodes) time complexity.

Example 1:

Input: 1->2->3->4->5->NULL
Output: 1->3->5->2->4->NULL
Example 2:

Input: 2->1->3->5->6->4->7->NULL
Output: 2->3->6->7->1->5->4->NULL
Note:

The relative order inside both the even and odd groups should remain as it was in the input.
The first node is considered odd, the second node even and so on ...
*/
/**
 * 328. Odd Even Linked List
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if (head === null)
        return null;
    let odd = head,
        even = head.next,
        oddNode = odd,
        evenNode = even;

    while (oddNode && oddNode.next && evenNode && evenNode.next) {
        oddNode.next = evenNode.next;
        oddNode = oddNode.next;
        if (oddNode !== null) {
            evenNode.next = oddNode.next;
            evenNode = evenNode.next;
        }
    }

    oddNode.next = even;
    return odd;
};

/**
 * LC 48. Rotate Image
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    n = matrix.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i + 1; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    // console.log(matrix);
    matrix = matrix.map(x => x.reverse());
};

A = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

rotate(A);
console.log(A);

/**
 * Implementation of zip
 */
const zip = (...rows) => [...rows[0]].map((_, c) => rows.map(row => row[c]))
r = zip(...A);
// console.log(r);

var a = [1, 2, 3]
var b = ['a', 'b', 'c']

var c = a.map(function(e, i) {
    return [e, b[i]];
});

// console.log(c)

/*
02. Binary Tree Level Order Traversal

Given a binary tree, return the level order traversal of 
its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 02. Binary Tree Level Order Traversal
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let q = [
        [root, 0]
    ];
    let ans = [];

    while (q.length > 0) {
        let [node, level] = q.shift();
        if (node !== null) {
            if (ans.length == level)
                ans.push([node.val]);
            else
                ans[level].push(node.val);
            if (node.left !== null)
                q.push([node.left, level + 1]);
            if (node.right !== null)
                q.push([node.right, level + 1]);
        }

    }

    return ans;
};

var levelOrderDfs = function(root) {
    const hmm = {};

    function dfs(head, lvl) {
        if (head === null) return null;

        if (!hmm[lvl]) hmm[lvl] = []
        hmm[lvl].push(head.val)

        dfs(head.left, lvl + 1)
        dfs(head.right, lvl + 1)
    }

    dfs(root, 0);
    return Object.values(hmm)
};

root = new TreeNode(1);
n1 = new TreeNode(2);
n2 = new TreeNode(3);
n3 = new TreeNode(4);

root.left = n1;
root.right = n2;
n2.right = n3;
// root = null;
r = levelOrder(root);
console.log(r);

/*
268. Missing Number

Given an array containing n distinct numbers taken 
from 0, 1, 2, ..., n, find the one that is missing from the array.

Example 1:

Input: [3,0,1]
Output: 2
Example 2:

Input: [9,6,4,2,3,5,7,0,1]
Output: 8
Note:
Your algorithm should run in linear runtime complexity. 
Could you implement it using only constant extra space complexity?
*/
/**
 * 268. Missing Number
 * @param {number[]} nums
 * @return {number}
 */
var missingNumberSum = function(nums) {
    n = nums.length;
    let sum = n * (n + 1) / 2;
    return sum - nums.reduce((a, b) => a + b);
};

var missingNumberXOR = function(nums) {
    let ans = 0;
    nums.forEach((x, i) => ans = ans ^ x ^ i);
    return ans ^ nums.length;
}

nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];
nums = [3, 0, 1];
r = missingNumberSum(nums);
r2 = missingNumberXOR(nums);
console.log('missing num ', r, r2);

/*
215. Kth Largest Element in an Array

Find the kth largest element in an unsorted array. 
Note that it is the kth largest element in the sorted order, 
not the kth distinct element.

Example 1:

Input: [3,2,1,5,6,4] and k = 2
Output: 5
Example 2:

Input: [3,2,3,1,2,4,5,5,6] and k = 4
Output: 4
Note: 
You may assume k is always valid, 1 ≤ k ≤ array's length.
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    //TODO
    const siftdown = function(nums, i) {
        while (i > 0) {
            let par = Math.floor((i - 1) / 2);
            // Note if not while
            if (nums[par] > nums[i]) {
                [nums[par], nums[i]] = [nums[i], nums[par]];
                i = par;
                continue;
            }
            break;
        }
    }

    const siftup = function(nums, i) {
        let minchild = i * 2 + 1;
        while (minchild < nums.length) {
            let rightchild = minchild + 1;
            // NOTE nums[rightchild] < nums[minchild]
            // NOTE if not while
            if (rightchild < nums.length && nums[rightchild] < nums[minchild])
                minchild = rightchild;
            if (nums[i] > nums[minchild])
                [nums[i], nums[minchild]] = [nums[minchild], nums[i]];
            i = minchild;
            minchild = i * 2 + 1;
        }
    }

    const heappush = function(nums, val) {
        nums.push(val);
        siftdown(nums, nums.length);
    }

    const heappop = function(nums) {
        let last = nums.pop();
        if (nums.length > 0) {
            let smallest = nums[0];
            nums[0] = last;
            siftup(nums, 0);
            return smallest;
        }
        return last;
    }

    const heapify = function(nums) {
        for (let i = Math.floor(nums.length / 2); i >= 0; i--) {
            // note: here is siftup
            siftup(nums, i);
        }
    }

    nums = nums.map(x => -x);
    // console.log(nums);
    heapify(nums);
    // console.log(nums);
    let ans;
    for (let i = 0; i < k; i++) {
        ans = heappop(nums);
        // console.log(ans, nums);
    }
    return -ans;
};

let ans;

nums = [3, 2, 1, 5, 6, 4],
    k = 2;
ans = findKthLargest(nums, k);
console.log(ans);

/*
350. Intersection of Two Arrays II

Given two arrays, write a function to compute their intersection.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]

Note:
Each element in the result should appear as many times as it 
shows in both arrays.
The result can be in any order.
Follow up:

What if the given array is already sorted? How would you optimize your 
algorithm?
What if nums1's size is small compared to nums2's size? 
Which algorithm is better?
What if elements of nums2 are stored on disk, and the memory 
is limited such that you cannot load all elements into the memory at once?
*/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersectMap = function(nums1, nums2) {
    //TODO
    const counter = function(nums) {
        let map = new Map();
        nums.forEach(x => {
            if (map.has(x)) {
                map.set(x, map.get(x) + 1)
            } else {
                map.set(x, 1);
            }
        });
        return map;
    }

    let map1 = counter(nums1),
        map2 = counter(nums2);

    // console.log(map1, map2);
    let ans = [];
    for (let k of map1.keys()) {
        if (map2.has(k)) {
            for (let i = 0; i < Math.min(map1.get(k), map2.get(k)); i++) {
                ans.push(k);
            }
        }
    }
    return ans;
};

var intersectTwoPointer = function(nums1, nums2) {
    //TODO
    nums1.sort((a, b) => a - b); // NOTE!!!!!!!!!!!!!
    nums2.sort((a, b) => a - b);

    let p1 = 0,
        p2 = 0,
        ans = [];

    while (p1 < nums1.length && p2 < nums2.length) {
        if (nums1[p1] === nums2[p2]) {
            ans.push(nums1[p1]);
            p1 += 1;
            p2 += 1;
        } else if (nums1[p1] < nums2[p2]) {
            p1 += 1;
        } else {
            p2 += 1;
        }

    }
    return ans;
};

let nums1, nums2;
nums1 = [1, 2, 2, 1], nums2 = [2, 2];
nums1 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4];
ans = intersectMap(nums1, nums2);
console.log(ans);


/**
 * 121. Best Time to Buy and Sell Stock
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = Infinity,
        maxProfit = 0;
    prices.forEach(p => {
        minPrice = Math.min(minPrice, p);
        maxProfit = Math.max(maxProfit, p - minPrice);
    })

    return maxProfit;
};

/*
49. Group Anagrams

Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note:

All inputs will be in lowercase.
The order of your output does not matter.
*/
/**
 * 49. Group Anagrams
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Object();
    strs.forEach(s => {
        let sorted = Array.from(s).sort().join('');
        if (sorted in map)
            map[sorted].push(s);
        else
            map[sorted] = [s];
    });
    return Object.values(map); // Note
    // OR
    //return Object.keys(keys).map(c=>keys[c]);
};

let arrs = ["eat", "tea", "tan", "ate", "nat", "bat"];
r = groupAnagrams(arrs);
console.log(r);

/*
202. Happy Number

Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following 
process: Starting with any positive integer, 
replace the number by the sum of the squares of its digits, 
and repeat the process until the number equals 1 
(where it will stay), or it loops endlessly in a 
cycle which does not include 1. Those numbers for 
which this process ends in 1 are happy numbers.

Example: 

Input: 19
Output: true
Explanation: 
1^2 + 9^2 = 82
8^2 + 2^2 = 68
6^2 + 8^2 = 100
1^2 + 0^2 + 0^2 = 1
*/
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let s = new Set();
    s.add(n);
    let ok = true;
    while (n !== 1) {
        let tmp = 0;
        while (n !== 0) {
            tmp += Math.pow(n % 10, 2);
            n = Math.floor(n / 10);
        }
        n = tmp;
        if (s.has(n)) {
            ok = false;
            break
        } else
            s.add(n);
        // console.log(s, n);
    }

    return ok;
};

console.log(isHappy(332));

/*
11. Container With Most Water

Given n non-negative integers a1, a2, ..., an , where each 
represents a point at coordinate (i, ai). n vertical lines are 
drawn such that the two endpoints of line i is at (i, ai) and (i, 0). 
Find two lines, which together with x-axis forms a container, such 
that the container contains the most water.

Note: You may not slant the container and n is at least 2.

Example:

Input: [1,8,6,2,5,4,8,3,7]
Output: 49
*/
/**
 * 11. Container With Most Water
 * @param {number[]} height
 * @return {number}
 */
var maxAreaTLE = function(height) {
    let ans = 0;
    for (let i = 0; i < height.length - 1; i++) {
        for (let j = i + 1; j < height.length; j++) {
            let h = Math.min(height[i], height[j]);
            let width = j - i;
            ans = Math.max(ans, h * width);
            // console.log(h, width, ans);
        }
    }
    return ans;
};

var maxArea = function(height) {
    //TODO
    // simply greedy
    let p1 = 0,
        p2 = height.length - 1,
        ans = 0;

    while (p1 < p2) {
        ans = Math.max(ans, (p2 - p1) * Math.min(height[p1], height[p2]));
        if (height[p1] < height[p2]) {
            p1 += 1;
        } else {
            p2 -= 1;
        }
    }

    return ans;
};

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
r = maxArea(height);
console.log(r);

/*
53. Maximum Subarray

Given an integer array nums, find the contiguous 
subarray (containing at least one number) which has 
the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Follow up:

If you have figured out the O(n) solution, try 
coding another solution using the divide and conquer 
approach, which is more subtle.
*/
/**
 * 53. Maximum Subarray
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxsub = 0,
        maxfinal = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        maxsub = Math.max(nums[i], nums[i] + maxsub);
        maxfinal = Math.max(maxfinal, maxsub);
    }
    return maxfinal;
};
r = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
console.log(maxSubArray([-2, -3]));
console.log(maxSubArray([-3, -2]));

/*
101. Symmetric Tree

Given a binary tree, check whether it is a mirror of 
itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3
 

But the following [1,2,2,null,3,null,3] is not:

    1
   / \
  2   2
   \   \
   3    3
 

Note:
Bonus points if you could solve it both recursively and iteratively.
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    //TODO
    const dfs = function(r1, r2) {
        if (r1 === null && r2 === null)
            return true;
        else if (r1 !== null && r2 !== null) {
            return r1.val === r2.val && dfs(r1.left, r2.right) && dfs(r1.right, r2.left);
        } else
            return false;
    }

    return dfs(root, root);
};

var isSymmetricIterative = function(root) {
    let q = [root, root];
    while (q.length > 0) {
        let n1 = q.shift(),
            n2 = q.shift();

        if (n1 === null && n2 === null)
            continue; // NOTE!!!!!!!
        else if (n1 !== null && n2 !== null) {
            if (n1.val === n2.val) {
                q.push(n1.right);
                q.push(n2.left);
                q.push(n1.left);
                q.push(n2.right);
            } else
                return false;

        } else
            return false;
    }
    return true;
}

/*
42. Trapping Rain Water

Given n non-negative integers 
representing an elevation map where the 
width of each bar is 1, compute how much water 
it is able to trap after raining.

The above elevation map is represented 
by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 
6 units of rain water (blue section) are being trapped.

Example:

Input: [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
*/
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    // TODO

};

/*
LC 75. Sort Colors
[2,0,2,1,1,0]
=> [0,0,1,1,2,2]
one-pass and O(1) space
*/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    //TODO

};


/*
128. Longest Consecutive Sequence

Given an unsorted array of integers, find the length of the 
longest consecutive elements sequence.

Your algorithm should run in O(n) complexity.

Example:

Input: [100, 4, 200, 1, 3, 2]
Output: 4
Explanation: The longest consecutive elements sequence is 
[1, 2, 3, 4]. Therefore its length is 4.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    //TODO

};

/*
326. Power of Three

Given an integer, write a function to determine if it is a power of three.

Example 1:

Input: 27
Output: true
Example 2:

Input: 0
Output: false
Example 3:

Input: 9
Output: true
Example 4:

Input: 45
Output: false
Follow up:
Could you do it without using any loop / recursion?
*/
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    // TODO

};

/* 
17. Letter Combinations of a Phone Number

Given a string containing digits from 2-9 inclusive, return all 
possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) 
is given below. Note that 1 does not map to any letters.



Example:

Input: "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
Note:

Although the above answer is in lexicographical order, your answer 
could be in any order you want.
*/
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    // last time I did it by myself
    // I'm lazy to do it for the moment, will do it later

};

/*
200. Number of Islands

Given a 2d grid map of '1's (land) and '0's (water), 
count the number of islands. An island is surrounded by 
water and is formed by connecting adjacent lands horizontally 
or vertically. You may assume all four edges of the grid are 
all surrounded by water.

Example 1:

Input:
11110
11010
11000
00000

Output: 1
Example 2:

Input:
11000
11000
00100
00011

Output: 3
*/
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslandsDFS = function(grid) {
    // beats 7.8 % ...
    if (grid.length == 0)
        return 0;
    let m = grid.length,
        n = grid[0].length;
    let visited = new Set();
    let ans = 0;
    const dfs = function(i, j) {
        if (visited.has(i + '-' + j))
            return;
        visited.add(i + '-' + j);
        if (j + 1 < n && grid[i][j + 1] === '1')
            dfs(i, j + 1);
        if (j - 1 >= 0 && grid[i][j - 1] === '1')
            dfs(i, j - 1)
        if (i + 1 < m && grid[i + 1][j] === '1')
            dfs(i + 1, j)
        if (i - 1 >= 0 && grid[i - 1][j] === '1')
            dfs(i - 1, j)
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1' && !visited.has(i + '-' + j)) {
                dfs(i, j);
                ans += 1;
            }
        }
    }
    return ans;
};

// TOOD: solve it by BFS

nums =
    [
        ["1", "0", "0", "1", "1"],
        ["1", "0", "0", "1", "1"],
        ["0", "0", "0", "1", "1"],
        ["0", "0", "0", "1", "1"],
        ["0", "0", "0", "0", "0"]
    ];
ans = numIslandsDFS(nums);
console.log(ans);


/*
66. Plus One

Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

Example 1:

Input: [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
*/
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    // my own sol
    let flag = true;
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] === 9) {
            digits[i] = 0;
        } else {
            digits[i] += 1;
            flag = false;
            break;
        }
    }
    if (flag) {
        digits.unshift(1);
    }
    return digits;
};

console.log(plusOne([1, 1, 9]));
console.log(plusOne([0]));

/*
162. Find Peak Element

A peak element is an element that is greater than its neighbors.

Given an input array nums, where nums[i] ≠ nums[i+1], find a peak 
element and return its index.

The array may contain multiple peaks, in that case return the 
index to any one of the peaks is fine.

You may imagine that nums[-1] = nums[n] = -∞.

Example 1:

Input: nums = [1,2,3,1]
Output: 2
Explanation: 3 is a peak element and your function should return the index number 2.
Example 2:

Input: nums = [1,2,1,3,5,6,4]
Output: 1 or 5 
Explanation: Your function can return either index number 1 where the peak element is 2, 
             or index number 5 where the peak element is 6.
Note:
Your solution should be in logarithmic complexity.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    //TODO
};

/*
105. Construct Binary Tree from Preorder and Inorder Traversal

Given preorder and inorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.

For example, given

preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]
Return the following binary tree:

    3
   / \
  9  20
    /  \
   15   7
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    //TODO
};

/*
131. Palindrome Partitioning

Given a string s, partition s such that every substring 
of the partition is a palindrome.

Return all possible palindrome partitioning of s.

Example:

Input: "aab"
Output:
[
  ["aa","b"],
  ["a","a","b"]
]
*/
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    //TODO
};

/*
240. Search a 2D Matrix II

Write an efficient algorithm that searches for a 
value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted in ascending from left to right.
Integers in each column are sorted in ascending from top to bottom.
Example:

Consider the following matrix:

[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
Given target = 5, return true.

Given target = 20, return false.
*/
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// very similar to LC378
var searchMatrix = function(matrix, target) {
    // TODO
};


/*
300. Longest Increasing Subsequence

Given an unsorted array of integers, find the length of 
longest increasing subsequence.

Example:

Input: [10,9,2,5,3,7,101,18]
Output: 4 
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4. 
Note:

There may be more than one LIS combination, 
it is only necessary for you to return the length.
Your algorithm should run in O(n2) complexity.
Follow up: Could you improve it to O(n log n) time complexity?
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    // TODO - two sol: dp and binary search

};

/*
26. Remove Duplicates from Sorted Array

Given a sorted array nums, remove the duplicates in-place 
such that each element appear only once and return the new length.

Do not allocate extra space for another array, y
ou must do this by modifying the input array 
in-place with O(1) extra memory.

Example 1:

Given nums = [1,1,2],

Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.

It doesn't matter what you leave beyond the returned length.
Example 2:

Given nums = [0,0,1,1,1,2,2,3,3,4],

Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.

It doesn't matter what values are set beyond the returned length.

Clarification:
Confused why the returned value is an integer but your answer 
is an array?

Note that the input array is passed in by reference, 
which means modification to the input array will 
be known to the caller as well.

Internally you can think of this:

// nums is passed in by reference. (i.e., without making a copy)
int len = removeDuplicates(nums);

// any modification to nums in your function would be known by the caller.
// using the length returned by your function, it prints the first len elements.
for (int i = 0; i < len; i++) {
    print(nums[i]);
}
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0)
        return 0
    let p = 0;
    nums.forEach((n, i) => {
        if (nums[i] !== nums[p]) {
            nums[++p] = nums[i];
        }
    })
    return ++p;
};

n = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
r = removeDuplicates(n);
console.log(n, r);

/*
38. Count and Say

The count-and-say sequence is the sequence of 
integers with the first five terms as following:

1.     1
2.     11
3.     21
4.     1211
5.     111221
1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.

Given an integer n where 1 ≤ n ≤ 30, generate the nth 
term of the count-and-say sequence.

Note: Each term of the sequence of integers will 
be represented as a string.

Example 1:

Input: 1
Output: "1"
Example 2:

Input: 4
Output: "1211"
*/
/**
 * 838. Count and Say
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let ans = '1';
    for (let i = 1; i < n; i++) {
        let tmp = '';
        let cnt = 1;
        for (let j = 0; j < ans.length; j++) {
            if (j + 1 === ans.length || ans[j] !== ans[j + 1]) {
                tmp += '' + cnt + ans[j];
                cnt = 1;
            } else {
                cnt += 1;
            }
        }
        ans = tmp;
    }
    return ans;
};

console.log('countAndSay', countAndSay(5));

/*
329. Longest Increasing Path in a Matrix

Given an integer matrix, find the length of the longest 
increasing path.

From each cell, you can either move to four directions: 
left, right, up or down. You may NOT move diagonally 
or move outside of the boundary (i.e. wrap-around is not allowed).

Example 1:

Input: nums = 
[
  [9,9,4],
  [6,6,8],
  [2,1,1]
] 
Output: 4 
Explanation: The longest increasing path is [1, 2, 6, 9].
Example 2:

Input: nums = 
[
  [3,4,5],
  [3,2,6],
  [2,2,1]
] 
Output: 4 
Explanation: The longest increasing path is [3, 4, 5, 6]. Moving diagonally is not allowed.
*/
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    if (matrix.length === 0)
        return 0;
    let memo = new Object();
    let m = matrix.length,
        n = matrix[0].length;

    const dfs = function(i, j) {
        let k = i + '-' + j;
        if (k in memo)
            return memo[k];
        let val = 1;
        let directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1]
        ];
        // NOTE: below how to unpack list
        directions.forEach(([di, dj]) => {
            if (0 <= i + di && i + di < m &&
                0 <= j + dj && j + dj < n &&
                matrix[i][j] < matrix[i + di][j + dj])
                val = Math.max(val, dfs(i + di, j + dj) + 1);
        })

        memo[k] = val;
        return val;
    }
    let ans = 1;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            ans = Math.max(ans, dfs(i, j));
        }
    }
    // console.log(memo);
    return ans;
};
nums =
    [
        [3, 4, 5],
        [3, 2, 6],
        [2, 2, 1]
    ];
r = longestIncreasingPath(nums);
console.log(r);

/*
73. Set Matrix Zeroes

Given a m x n matrix, if an element is 0, set its 
entire row and column to 0. Do it in-place.

Example 1:

Input: 
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
Output: 
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]
Example 2:

Input: 
[
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]
Output: 
[
  [0,0,0,0],
  [0,4,5,0],
  [0,3,1,0]
]
Follow up:

A straight forward solution using O(mn) space is probably 
a bad idea.
A simple improvement uses O(m + n) space, but still 
not the best solution.
Could you devise a constant space solution?
*/
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    // TODO: this is after saw the sol
    let m = matrix.length,
        n = matrix[0].length,
        setFirstCol = false;

    for (let i = 0; i < m; i++) {
        if (matrix[i][0] === 0)
            setFirstCol = true;
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0)
                matrix[i][j] = 0;
        }
    }

    if (matrix[0][0] === 0) {
        for (let j = 0; j < n; j++)
            matrix[0][j] = 0;
    }

    if (setFirstCol) {
        for (let i = 0; i < m; i++)
            matrix[i][0] = 0;
    }
};

/*
334. Increasing Triplet Subsequence

Given an unsorted array return whether an increasing 
subsequence of length 3 exists or not in the array.

Formally the function should:

Return true if there exists i, j, k 
such that arr[i] < arr[j] < arr[k] given 0 ≤ i < j < k ≤ n-1 else return false.
Note: Your algorithm should run in O(n) time complexity and O(1) 
space complexity.

Example 1:

Input: [1,2,3,4,5]
Output: true
Example 2:

Input: [5,4,3,2,1]
Output: false
*/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    // TODO
    // NOTE: this is quite similar to French flag problem
    let i = Infinity,
    j = Infinity;

    for (let n of nums) {
        if (n <= i)
            i = n;
        else if (n<=j)
            j = n;
        else
            return true;
        console.log(n, i, j);
    }
    return false;
};

console.log(increasingTriplet([12,13,5,4,6,9]));

/*
208. Implement Trie (Prefix Tree)

Implement a trie with insert, search, and startsWith methods.

Example:

Trie trie = new Trie();

trie.insert("apple");
trie.search("apple");   // returns true
trie.search("app");     // returns false
trie.startsWith("app"); // returns true
trie.insert("app");   
trie.search("app");     // returns true
Note:

You may assume that all inputs are consist of lowercase letters a-z.
All inputs are guaranteed to be non-empty strings.
*/
/**
 * Initialize your data structure here.
 */
var Trie = function() {
    
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

/*
395. Longest Substring with At Least K Repeating Characters

Find the length of the longest substring T of a given 
string (consists of lowercase letters only) such that 
every character in T appears no less than k times.

Example 1:

Input:
s = "aaabb", k = 3

Output:
3

The longest substring is "aaa", as 'a' is repeated 3 times.
Example 2:

Input:
s = "ababbc", k = 2

Output:
5

The longest substring is "ababb", as 'a' is repeated 2 times and 'b' is repeated 3 times.
*/
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
    
};
