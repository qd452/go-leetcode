package lc1254

func closedIsland(grid [][]int) int {
	ans := 0
	for i := range grid {
		for j := range grid[0] {
			if grid[i][j] == 0 {
				if dfs(i, j, grid) {
					ans++
				}
			}
		}
	}
	return ans
}

func dfs(i, j int, grid [][]int) bool {
	if i < 0 || i >= len(grid) || j < 0 || j >= len(grid[0]) {
		return false
	}
	if grid[i][j] == 1 {
		return true
	}
	grid[i][j] = 1
	down := dfs(i-1, j, grid)
	up := dfs(i+1, j, grid)
	right := dfs(i, j+1, grid)
	left := dfs(i, j-1, grid)
	return up && down && left && right
}
