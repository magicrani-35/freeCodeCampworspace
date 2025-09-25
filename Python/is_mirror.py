import re

def is_mirror(str1, str2):
    
    clean1 = re.sub(r'[^A-Za-z]', '', str1)
    clean2 = re.sub(r'[^A-Za-z]', '', str2)
    
    
    reversed_str1 = clean1[::-1]
    
    
    return reversed_str1 == clean2 and clean1 != clean2