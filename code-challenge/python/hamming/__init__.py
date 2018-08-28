"""
# Define your compute function here.
# run python -m unittest test.hamming_test to ensure the
# unit tests pass and your code meets all of the conditions.

Author: Developer, Dev team
Last Accessed Date: 25 Aug, 2018
"""

def compute(dna1, dna2):
    """
    This function will calculates the hamming distance between the two DNA strands.

    Input: DNA Strands dna1 and dna2
    :return: Hamming distance between the two DNA strands
    """
    if len(dna1) != len(dna2):
        raise ValueError("Both DNA strands should be equal length.")
    return len([a for a,b in zip(dna1,dna2) if a != b])
