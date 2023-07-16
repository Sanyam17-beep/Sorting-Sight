import React from 'react';
import { newTrace, addToTrace, lastSorted, swap, createKey } from './helpers';

const SelectionSort = (nums) => {
    // setup code for tracing the algo
    const trace = newTrace(nums);

    // selection sort algo with trace capture
    for(let i = 0; i < nums.length; i++) {
        let indexOfMin = i;

        for(let j = i+1; j < nums.length; j++) {
            // visualize - compare A[indexOfMin] and A[j]
            addToTrace(trace, nums, lastSorted(trace), [indexOfMin, j]);

            if(nums[j] < nums[indexOfMin]) {
                // visualized - new min discovered
                addToTrace(trace, nums, lastSorted(trace), [indexOfMin], [j]);
                indexOfMin = j;
                addToTrace(trace, nums, lastSorted(trace), [indexOfMin], [j]);
            } 
        }
        
        // visualize - i'th value to be swapped with min value
        addToTrace(trace, nums, lastSorted(trace), [], [i, indexOfMin]);

        // visualize - swap
        swap(nums, i, indexOfMin);

        // visualize - i'th value has been swapped with min value
        addToTrace(trace, nums, [...lastSorted(trace), i], [], []);
        
    }

    // visualize final trace
    addToTrace(trace, nums, [...lastSorted(trace), nums.length - 1]);

    console.log(`trace for selection sort: ${trace}`);
    return trace;
};

export const SelectionSortKey = createKey('Comparing', 'Swapping');

export const SelectionSortDesc = {
    title: 'Selection Sort',
    description: (
      <p>
        <a
          href="https://en.wikipedia.org/wiki/Selection_sort"
          target="_blank"
          rel="noopener noreferrer"
        >
          Selection Sort
        </a>{' '}
        is also known as the "Prove Me Wrong" algorithm.  It is an in-place comparison sorting algorithm that divides the input
        list into two parts: the sublist of items already sorted, which is built up from left to right at the front (left) of the list, and the sublist of items remaining to be sorted that occupy the rest of the list. Initially, the sorted sublist is empty and the unsorted sublist is the entire input list. The algorithm proceeds by finding the smallest element in the unsorted sublist, exchanging (swapping) it with the leftmost unsorted element (putting it in sorted order), and moving the sublist boundaries one element to the right.
      </p>
    ),
    worstCase: (
      <span>
        O(n<sup>2</sup>)
      </span>
    ),
    avgCase: (
      <span>
        O(n<sup>2</sup>)
      </span>
    ),
    bestCase: (
      <span>
        O(n<sup>2</sup>)
      </span>
    ),
    space: <span>O(1)</span>
};

export default SelectionSort;