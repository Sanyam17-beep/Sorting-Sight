import React from 'react';
import { newTrace, addToTrace, lastSorted, createKey } from './helpers';

const InsertionSort = (nums) => {
    // setup code for tracing the algo
    const trace = newTrace(nums);

    // selection sort algo with trace capture
    for(let i = 1; i < nums.length; i++) {
        let key = nums[i];
        let j=i-1;

        while(j>=0 && nums[j]>key){
            // visualize - compare A[indexOfMin] and A[j]
            // addToTrace(trace, nums, lastSorted(trace), [indexOfMin, j]);

            
                // visualized - new min discovered
                // addToTrace(trace, nums, lastSorted(trace), [j+1], [j]);
                nums[j+1]= nums[j];
                addToTrace(trace, nums, lastSorted(trace), [j+1], [j]);
                j=j-1;
           
        }
        
        // visualize - i'th value to be swapped with min value
        addToTrace(trace, nums, lastSorted(trace), [], [j+1, key]);
nums[j+1]=key;
        // visualize - swap
        // swap(nums, i, indexOfMin);

        // // visualize - i'th value has been swapped with min value
        // addToTrace(trace, nums, [...lastSorted(trace), i], [], []);
        
    }

    // visualize final trace
    addToTrace(trace, nums, [...Array(nums.length).keys()]);

    console.log(`trace for selection sort: ${trace}`);
    return trace;
};

export const InsertionSortKey = createKey('Comparing', 'Insertion');

export const InsertionSortDesc = {
    title: 'Insertion Sort',
    description: (
      <p>
        <a
          href="https://en.wikipedia.org/wiki/Insertion_sort"
          target="_blank"
          rel="noopener noreferrer"
        >
          Insertion Sort
        </a>{' '}
        is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part.
        To sort an array of size N in ascending order iterate over the array and compare the current element (key) to its predecessor, if the key element is smaller than its predecessor, compare it to the elements before. Move the greater elements one position up to make space for the swapped element.
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
        O(n)
      </span>
    ),
    space: <span>O(1)</span>
};

export default InsertionSort;