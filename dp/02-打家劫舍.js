/*
  f(k) = 从前 K 个房屋中能偷窃到的最大数额
  Ak = 第 K 个房屋的钱数
  f(k) = max(f(k - 2) + Ak, f(k - 1))

  [1, 2, 3, 1] 
  k = 3
  f(3) = max(f(1) + Ak, f(2))
*/
