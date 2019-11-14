package lc1249

// import "strings"
// import "fmt"

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

// 4ms, beats 100, using []byte instead of stirngs.Split
func minRemoveToMakeValidMyModified(s string) string {
	// a := strings.Split(s, "")
	a := []byte(s)
	// fmt.Println(a)

	var b []int // open parentheses
	for i, n := range s {
		if n == '(' {
			b = append(b, i)
		} else if n == ')' {
			if len(b) > 0 {
				b = b[:len(b)-1] // b.pop()
			} else {
				// a = append(a[:i], a[i+1:]...) // a.remove(i)
				a[i] = 0
			}
		}
	}

	for len(b) > 0 {
		i := b[len(b)-1]
		// a = append(a[:i], a[i+1:]...)
		a[i] = 0
		b = b[:len(b)-1]
	}
	ans := a[:0]
	for _, x := range a {
		if x != 0 {
			ans = append(ans, x)
		}
	}
	return string(ans)
}
