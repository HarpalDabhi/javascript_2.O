def make_change_greedy(amount, coins):
    # Sort coins in descending order
    coins.sort(reverse=True)
    
    # Initialize variables
    change = []
    remaining_amount = amount
    
    # Iterate through coin denominations
    for coin in coins:
        while remaining_amount >= coin:
            change.append(coin)
            remaining_amount -= coin
    
    return change

# Example usage:
amount = 63
coins = [25, 10, 5, 1]

change = make_change_greedy(amount, coins)
print("Minimum coins needed:", change)
print("Total number of coins:", len(change))
