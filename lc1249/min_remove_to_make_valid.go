package lc1249

func minRemoveToMakeValid(s string) string {
	var st []int //save parentheses index which should be delete
	//var res string = ""
	for i, ch := range s {
		if ch == '(' {
			st = append(st, i)
		} else if ch == ')' {
			if len(st) > 0 && s[st[len(st)-1]] == '(' {
				st = st[:len(st)-1]
			} else { //stack empty or top is ')'
				st = append(st, i)
			}
		}
	}
	//使用栈的标准操作
	/*
	   var res string = ""
	   start, end := 0, len(s)
	   for len(st) > 0 {
	       start = st[len(st) - 1] + 1
	       st = st[:len(st) - 1]
	       res = s[start:end] + res
	       end = start - 1
	       start = 0
	   }
	   res = s[start:end] + res
	*/
	//使用Go切片特有的既可以当栈用也可以当数组用的特性
	res := make([]byte, 0, len(s)-len(st))
	start, end := 0, len(s)
	for _, i := range st {
		end = i
		res = append(res, ([]byte(s[start:end]))...)
		start = end + 1
		end = len(s) //这个不能忘！
	}
	res = append(res, ([]byte(s[start:end]))...)
	return string(res)
}
