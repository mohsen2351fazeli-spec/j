const d = {
  1: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkUwMS43MjBwLm1rdg==",
  2: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkUwMi43MjBwLm1rdg==",
  3: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkUwMy43MjBwLm1rdg==",
  4: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkUwNC43MjBwLm1rdg==",
  5: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkUwNS43MjBwLm1rdg==",
  6: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkUwNi43MjBwLm1rdg==",
  7: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkUwNy43MjBwLm1rdg==",
  8: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkUwOC43MjBwLm1rdg==",
  9: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkUwOS43MjBwLm1rdg==",
  10: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkUxMC43MjBwLm1rdg==",
  11: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkUxMS43MjBwLm1rdg==",
  12: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkUxMi43MjBwLm1rdg==",
  13: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkUxMy43MjBwLm1rdg==",
  14: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkUxNC43MjBwLm1rdg==",
  15: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkUxNS43MjBwLm1rdg==",
  16: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkUxNi43MjBwLm1rdg==",
  17: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkUxNy43MjBwLm1rdg==",
  18: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkUxOC43MjBwLm1rdg==",
  19: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkUxOS43MjBwLm1rdg==",
  20: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkUyMC43MjBwLm1rdg==",
  21: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkUyMS43MjBwLm1rdg==",
  22: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkUyMi43MjBwLm1rdg==",
  23: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkUyMy43MjBwLm1rdg==",
  24: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkUyNC43MjBwLm1rdg==",
  25: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkUyNS43MjBwLm1rdg==",
  26: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkUyNi43MjBwLm1rdg==",
  27: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkUyNy43MjBwLm1rdg==",
  28: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkUyOC43MjBwLm1rdg==",
  29: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkUyOS43MjBwLm1rdg==",
  30: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkUzMC43MjBwLm1rdg==",
  31: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkUzMS43MjBwLm1rdg==",
  32: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkUzMi43MjBwLm1rdg==",
  33: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkUzMy43MjBwLm1rdg==",
  34: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkUzNC43MjBwLm1rdg==",
  35: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkUzNS43MjBwLm1rdg==",
  36: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkUzNi43MjBwLm1rdg==",
  37: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkUzNy43MjBwLm1rdg==",
  38: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkUzOC43MjBwLm1rdg==",
  39: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkUzOS43MjBwLm1rdg==",
  40: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkU0MC43MjBwLm1rdg==",
  41: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkU0MS43MjBwLm1rdg==",
  42: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkU0Mi43MjBwLm1rdg==",
  43: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkU0My43MjBwLm1rdg==",
  44: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkU0NC43MjBwLm1rdg==",
  45: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkU0NS43MjBwLm1rdg==",
  46: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkU0Ni43MjBwLm1rdg==",
  47: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkU0Ny43MjBwLm1rdg==",
  48: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkU0OC43MjBwLm1rdg==",
  49: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkU0OS43MjBwLm1rdg==",
  50: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkU1MC43MjBwLm1rdg==",
  51: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkU1MS43MjBwLm1rdg==",
  52: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkU1Mi43MjBwLm1rdg==",
  53: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkU1My43MjBwLm1rdg==",
  54: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkU1NC43MjBwLm1rdg==",
  55: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkU1NS43MjBwLm1rdg==",
  56: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkU1Ni43MjBwLm1rdg==",
  57: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkU1Ny43MjBwLm1rdg==",
  58: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkU1OC43MjBwLm1rdg==",
  59: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkU1OS43MjBwLm1rdg==",
  60: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkU2MC43MjBwLm1rdg==",
  61: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkU2MS43MjBwLm1rdg==",
  62: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkU2Mi43MjBwLm1rdg==",
  63: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkU2My43MjBwLm1rdg==",
  64: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkU2NC43MjBwLm1rdg==",
  65: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkU2NS43MjBwLm1rdg==",
  66: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkU2Ni43MjBwLm1rdg==",
  67: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkU2Ny43MjBwLm1rdg==",
  68: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkU2OC43MjBwLm1rdg==",
  69: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkU2OS43MjBwLm1rdg==",
  70: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkU3MC43MjBwLm1rdg==",
  71: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkU3MS43MjBwLm1rdg==",
  72: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkU3Mi43MjBwLm1rdg==",
  73: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkU3My43MjBwLm1rdg==",
  74: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkU3NC43MjBwLm1rdg==",
  75: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkU3NS43MjBwLm1rdg==",
  76: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkU3Ni43MjBwLm1rdg==",
  77: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkU3Ny43MjBwLm1rdg==",
  78: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkU3OC43MjBwLm1rdg==",
  79: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkU3OS43MjBwLm1rdg==",
  80: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkU4MC43MjBwLm1rdg==",
  81: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkU4MS43MjBwLm1rdg==",
  82: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkU4Mi43MjBwLm1rdg==",
  83: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkU4My43MjBwLm1rdg==",
  84: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkU4NC43MjBwLm1rdg==",
  85: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkU4NS43MjBwLm1rdg==",
  86: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkU4Ni43MjBwLm1rdg==",
  87: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkU4Ny43MjBwLm1rdg==",
  88: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkU4OC43MjBwLm1rdg==",
  89: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkU4OS43MjBwLm1rdg==",
  90: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkU5MC43MjBwLm1rdg==",
  91: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkU5MS43MjBwLm1rdg==",
  92: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkU5Mi43MjBwLm1rdg==",
  93: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkU5My43MjBwLm1rdg==",
  94: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkU5NC43MjBwLm1rdg==",
  95: "https://www.moviesho.com/playonline/6101?player=aHR0cHM6Ly9zci5tb3ZpZXNoby5jb20vU2VyaWVzL1RocmVlLktpbmdkb21zL1RocmVlLktpbmdkb21zLkU5NS43MjBwLm1rdg==",
};

const hed = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    hed.classList.add("h4");
    document.querySelector(".panel-btn").classList.add("t");
  } else {
    hed.classList.remove("h4");
    document.querySelector(".panel-btn").classList.remove("t");
  }
});
// panel
const pbtn = document.querySelector(".panel-btn");
const panel = document.querySelector(".panel");
const hola = document.querySelector(".hola");
const ca = document.querySelector(".ca");
const cb = document.querySelector(".cb");
const cc = document.querySelector(".cc");

pbtn.addEventListener("click", () => {
  panel.classList.toggle("w0");
  pbtn.classList.toggle("r12");
  hola.classList.toggle("hidt");
  cb.classList.toggle("hidt");
  ca.classList.toggle("cat");
  cc.classList.toggle("cct");
});
hola.addEventListener("click", () => {
  panel.classList.toggle("w0");
  pbtn.classList.toggle("r12");
  hola.classList.toggle("hidt");
  cb.classList.toggle("hidt");
  ca.classList.toggle("cat");
  cc.classList.toggle("cct");
});

const main = document.querySelector(".main");
const data = {
  0: "",
  1: "یک",
  2: "دوم",
  3: "سوم",
  4: "چهارم",
  5: "پنجم",
  6: "ششم",
  7: "هفتم",
  8: "هشتم",
  9: "نهم",
  10: "دهم",
  11: "یازدهم",
  12: "دوازدهم",
  13: "سیزدهم",
  14: "چهاردهم",
  15: "پانزدهم",
  16: "شانزدهم",
  17: "هفدهم",
  18: "هجدهم",
  19: "نوزدهم",
  20: " بیست",
  30: "سی",
  40: "چهل",
  50: "پنجاه",
  60: "شصت",
  70: "هفتاد",
  80: "هشتاد",
  90: "نود",
};

// https://sr.moviesho.com/Series/Three.Kingdoms/Three.Kingdoms.E95.720p.mkv

for (let i = 1; i < 21; i++) {
  main.insertAdjacentHTML(
    "beforeend",
    `
    <div  class="one-1">
  <div class="waffen">قسمت ${data[i]}</div>
  <a class="ww" href="https://sr.moviesho.com/Series/Three.Kingdoms/Three.Kingdoms.E${i}.720p.mkv"></a>
  <div class="one-1-pic"></div>
  <div class="one-1-hale"></div>
  <div class="one-1-cer">
    <div class="one-1-cer-c">
      <div class="mo">▷</div>
    </div>
  </div>
</div>
    `,
  );
}

for (let i = 21; i < 96; i++) {
  const first = i % 10;
  const second = Math.floor(i / 10) * 10;

  main.insertAdjacentHTML(
    "beforeend",
    `
    <div class="one-1">
  <div class="waffen">قسمت ${data[second]} ${data[first]}</div>
  <a class="ww" href="${d[i]}"></a>
  <div class="one-1-pic"></div>
  <div class="one-1-hale"></div>
  <div class="one-1-cer">
    <div class="one-1-cer-c">
      <div class="mo">▷</div>
    </div>
  </div>
</div>
    `,
  );
}
const arr = [];
let onedad = document.querySelectorAll(".one-1");
let waffen = document.querySelectorAll(".waffen");

const input = document.querySelector(".input");

// input.addEventListener("keyup", () => {
//   const value = input.value;
//   console.log(value);
//   main.innerHTML = "";

//   for (let i = 1; i < 96; i++) {
//     if (value - 95 < 1) {
//       {
//         const first = i % 10;
//         const second = Math.floor(i / 10) * 10;
//         if (value == i) {
//           if (i > 10 && i < 20) {
//             main.insertAdjacentHTML(
//               "beforeend",
//               `
//     <div class="one-1">
//   <div class="waffen">قسمت ${data[i]}</div>
//   <a class="ww" href="${d[i]}"></a>
//   <div class="one-1-pic"></div>
//   <div class="one-1-hale"></div>
//   <div class="one-1-cer">
//     <div class="one-1-cer-c">
//       <div class="mo">▷</div>
//     </div>
//   </div>
// </div>
//     `,
//             );
//           } else {
//             main.insertAdjacentHTML(
//               "beforeend",
//               `
//     <div class="one-1">
//   <div class="waffen">قسمت ${data[second] ? data[second] : ""} ${data[first] ? data[first] : ""}</div>
//   <a class="ww" href="${d[i]}"></a>
//   <div class="one-1-pic"></div>
//   <div class="one-1-hale"></div>
//   <div class="one-1-cer">
//     <div class="one-1-cer-c">
//       <div class="mo">▷</div>
//     </div>
//   </div>
// </div>
//     `,
//             );
//           }
//         }
//       }
//     } else if (`${waffen[i]}`.includes(value)) {
//       main.insertAdjacentHTML("beforeend", `${onedad[i]}`);
//       console.log("ss");
//     }
//   }
// });

const getPartName = (partNumber) => {
  if (partNumber <= 20) {
    return data[partNumber];
  } else {
    const first = partNumber % 10;
    const second = Math.floor(partNumber / 10) * 10;
    const secondText = data[second] || "";
    const firstText = first !== 0 ? data[first] : "";
    return `${secondText} ${firstText}`.trim();
  }
};

const renderParts = (filterValue) => {
  main.innerHTML = "";

  for (let i = 1; i <= 95; i++) {
    const partName = getPartName(i);
    const searchText = ` قسمت ${partName}`;

    if (
      !filterValue ||
      searchText.includes(filterValue) ||
      i.toString() === filterValue
    ) {
      main.insertAdjacentHTML(
        "beforeend",
        `
        <div class="one-1">
          <div class="waffen">قسمت ${partName}</div>
          <a class="ww" href="${d[i]}"></a>
          <div class="one-1-pic"></div>
          <div class="one-1-hale"></div>
          <div class="one-1-cer">
            <div class="one-1-cer-c">
              <div class="mo">▷</div>
            </div>
          </div>
        </div>`,
      );
    }
  }
};

renderParts("");

input.addEventListener("keyup", () => {
  document.querySelector(".none").classList.add("hidden");
  renderParts(input.value.trim());
  if (main.innerHTML == "")
    document.querySelector(".none").classList.remove("hidden");

  let onedad = document.querySelectorAll(".one-1");
  onedad.forEach((o) => {
    o.classList.add("o0");
    o.classList.add("d");
  });
  setTimeout(() => {
    onedad.forEach((o) => {
      o.classList.remove("o0");
      o.classList.remove("d");
    });
  }, 100);
});
