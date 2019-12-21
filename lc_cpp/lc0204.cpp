class Solution {
public:
    int countPrimes(int n) {
        if (n < 3)
            return 0;
        vector<bool> primes(n, true);
        primes[0] = false;
        primes[1] = false;
        for (int i = 2; i < pow(n, 0.5) + 1; ++i) {
            if (primes[i]) {
                for (int j = i * i; j < n; j+=i) {
                    primes[j] = false;
                }
            }
        }
        
        int ans = 0;
        for (bool p : primes) {
            if (p) 
                ans++;
        }
        return ans;
    }
};