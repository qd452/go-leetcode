#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    vector<int> gardenNoAdj(int N, vector<vector<int>>& paths) {
        vector<vector<int>> graph(N);
        vector<int> ans(N);
        for (auto& p : paths) {
            int x = p[0] - 1, y = p[1] - 1;
            graph[x].push_back(y);
            graph[y].push_back(x);
        }
        
        for (int i = 0; i < N; ++i) {
            int colors[5] = {}; // represent if that color is occupied by it neibours
            for (int j : graph[i]) 
                colors[ans[j]] = 1; // means adjecent color is occupied
            for (int c = 4; c > 0; --c) 
                if (!colors[c]) 
                    ans[i] = c;
        }
        
        return ans;
    }
};