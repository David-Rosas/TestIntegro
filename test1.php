<?php

function is_palindrome($input) {
    // Convert the input string to lowercase and remove non-alphanumeric characters
    $input = strtolower(preg_replace('/[^a-zA-Z0-9]/', '', $input));

    // Reverse the input string
    $reversed = strrev($input);

    // Compare the original input with the reversed input
    return $input === $reversed;
}

$input = "Allí por la tropa portado, traído a ese paraje de maniobras, una tipa como capitán usar boina me dejara, pese a odiar toda tropa por tal ropilla";

// call function is_palindrome
var_dump(is_palindrome($input));

