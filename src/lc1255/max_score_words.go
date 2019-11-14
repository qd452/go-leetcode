package lc1255

// import "fmt"

func maxScoreWords(words []string, letters []byte, score []int) int {
	wordScore := make([]int, len(words))
	for i, word := range words {
		cur := 0
		for j := 0; j < len(word); j++ {
			cur += score[(word[j] - 'a')]
		}
		wordScore[i] = cur
	}

	letterMap := make([]int, 26)
	for _, v := range letters {
		letterMap[v-'a']++
	}

	maxScore := 0
	var recursion func(int, []int, int)
	recursion = func(curScore int, remainLetter []int, index int) {
		if index == len(words) {
			if curScore > maxScore {
				maxScore = curScore
			}
			return
		}
		curLetter := make([]int, 26)
		for i := 0; i < len(words[index]); i++ {
			curLetter[words[index][i]-'a']++
		}
	OUTER:
		for k := 0; k < 1; k++ {
			nextLetter := make([]int, 26)
			for i := 0; i < 26; i++ {
				nextLetter[i] = remainLetter[i] - curLetter[i]
				if nextLetter[i] < 0 {
					break OUTER
				}
			}
			recursion(curScore+wordScore[index], nextLetter, index+1)
		}
		recursion(curScore, remainLetter, index+1)
	}
	recursion(0, letterMap, 0)
	return maxScore
}

// https://leetcode.com/contest/weekly-contest-162/ranking/9/
// func maxScoreWords(words []string, letters []byte, score []int) int {
// 	wordCount := make([]map[byte]int, len(words))
// 	//make(map[byte]int)
// 	for wi, word := range words {
// 		wordC := make(map[byte]int)
// 		for i := 0; i < len(word); i++ {
// 			wordC[word[i]]++
// 		}
// 		wordCount[wi] = wordC
// 	}

// 	wordScore := make([]int, len(words))

// 	for i, wordC := range wordCount {
// 		tmpScore := 0
// 		for k, v := range wordC {
// 			tmpScore += score[k-97] * v
// 		}
// 		wordScore[i] = tmpScore
// 	}

// 	letterCount := make(map[byte]int)
// 	for _, b := range letters {
// 		letterCount[b]++
// 	}

// 	fmt.Println(wordCount)
// 	fmt.Println(wordScore)
// 	ans := 0
// 	l := len(words)
// 	var dfs func(map[byte]int, int, int)
// 	dfs = func(letterCount map[byte]int, start int, curScore int) {
// 		if ans < curScore {
// 			ans = curScore
// 		}

// 		for i := start; i < l; i++ {
// 			if check(wordCount[i], letterCount) {
// 				dfs(hashMapOp(letterCount, wordCount[i], "-"), i+1, wordScore[i]+curScore)
// 			}
// 		}
// 	}

// 	dfs(letterCount, 0, 0)
// 	return ans
// }

// func check(wordC map[byte]int, letterCount map[byte]int) bool {
// 	for wk, wv := range wordC {
// 		lv, ok := letterCount[wk]
// 		if !ok || wv > lv {
// 			return false
// 		}
// 	}
// 	return true
// }

// func hashMapOp(letterCount map[byte]int, wordC map[byte]int, op string) map[byte]int {
// 	ans := make(map[byte]int)
// 	for wk, wv := range wordC {
// 		if op == "-" {
// 			ans[wk] = letterCount[wk] - wv
// 		} else if op == "+" {
// 			ans[wk] = letterCount[wk] + wv
// 		}

// 	}
// 	return ans
// }
