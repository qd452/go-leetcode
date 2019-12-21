#include <iostream>
#include <vector>
#include <map>
#include <unordered_map>

using namespace std;

// Japanese Macro
#define F first
#define S second
#define R cin>>
#define Z class
#define ll long long
#define ln cout<<'\n'
#define in(a) insert(a)
#define pb(a) push_back(a)
#define pd(a) printf("%.10f\n",a)
#define mem(a) memset(a,0,sizeof(a))
#define all(c) (c).begin(),(c).end()
#define iter(c) __typeof((c).begin())
#define rrep(i,n) for(ll i=(ll)(n)-1;i>=0;i--)
#define REP(i,m,n) for(ll i=(ll)(m);i<(ll)(n);i++)
#define rep(i,n) REP(i,0,n)
#define tr(it,c) for(iter(c) it=(c).begin();it!=(c).end();it++)
template<Z A>void pr(A a){cout<<a;ln;}
template<Z A,Z B>void pr(A a,B b){cout<<a<<' ';pr(b);}
template<Z A,Z B,Z C>void pr(A a,B b,C c){cout<<a<<' ';pr(b,c);}
template<Z A,Z B,Z C,Z D>void pr(A a,B b,C c,D d){cout<<a<<' ';pr(b,c,d);}
template<Z A>void PR(A a,ll n){rep(i,n){if(i)cout<<' ';cout<<a[i];}ln;}
ll check(ll n,ll m,ll x,ll y){return x>=0&&x<n&&y>=0&&y<m;}
const ll MAX=1e9+7,MAXL=1LL<<61,dx[8]={-1,0,1,0,-1,-1,1,1},dy[8]={0,1,0,-1,-1,1,-1,1};
typedef pair<ll,ll> P;
//---------------------------------------------------

template<Z A>void print(A a){for(auto vv:a){cout<<vv<<' ';}ln;}

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int, int> dct;
        
        for (int i = 0;; ++i) { // note: must be like this ;;
            auto it = dct.find(nums[i]);
            
            if (it != dct.end()) {
                return vector<int> {it->S, i};
            }
            dct[target - nums[i]] = i;
        }      
    }
};

int main () {
    Solution s;
    std::vector<int> ans;

    vector<int> nums = {2,7,11,15};
    int target = 9;

    // print(nums);

    ans = s.twoSum(nums, target);
    print(ans);

    return 0;
}