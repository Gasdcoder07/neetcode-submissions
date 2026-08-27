/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let dummy = new ListNode(0)
        let l1 = list1;
        let l2 = list2;
        let l3 = dummy;

        while(l2 !== null && l1!== null) {
            if (l1.val < l2.val) {
                l3.next = l1
                l1 = l1.next;
            } else {
                l3.next = l2;
                l2 = l2.next;
            }
            l3 = l3.next
        }

        if (l2 !== null) {
            l3.next = l2
        } else {
            l3.next = l1
        }

        return dummy.next
    }
}
