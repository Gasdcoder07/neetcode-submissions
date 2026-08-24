class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        duplicates = set()
        for num in nums:
            if num in duplicates:
                return True
            duplicates.add(num)
        return False