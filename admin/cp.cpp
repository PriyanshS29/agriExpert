#include <iostream>
#include <vector>
using namespace std;

string canTransform(int N, int M, vector<vector<int>>& A, vector<vector<int>>& B) {
    // Compute the overall XOR of A and B
    int xor_A = 0, xor_B = 0;
    for (int i = 0; i < N; i++) {
        for (int j = 0; j < M; j++) {
            xor_A ^= A[i][j];
            xor_B ^= B[i][j];
        }
    }

    // If the overall XORs are not equal, transformation is impossible
    if (xor_A != xor_B) {
        return "No";
    }

    // Compute row XORs for A and B
    vector<int> row_xor_A(N, 0), row_xor_B(N, 0);
    for (int i = 0; i < N; i++) {
        for (int j = 0; j < M; j++) {
            row_xor_A[i] ^= A[i][j];
            row_xor_B[i] ^= B[i][j];
        }
    }

    // Compute column XORs for A and B
    vector<int> col_xor_A(M, 0), col_xor_B(M, 0);
    for (int j = 0; j < M; j++) {
        for (int i = 0; i < N; i++) {
            col_xor_A[j] ^= A[i][j];
            col_xor_B[j] ^= B[i][j];
        }
    }

    // Flip rows where row_xor_A[i] != row_xor_B[i]
    for (int i = 0; i < N; i++) {
        if (row_xor_A[i] != row_xor_B[i]) {
            for (int j = 0; j < M; j++) {
                A[i][j] ^= 1;
            }
        }
    }

    // Flip columns where col_xor_A[j] != col_xor_B[j]
    for (int j = 0; j < M; j++) {
        if (col_xor_A[j] != col_xor_B[j]) {
            for (int i = 0; i < N; i++) {
                A[i][j] ^= 1;
            }
        }
    }

    // Check if A matches B after transformations
    for (int i = 0; i < N; i++) {
        for (int j = 0; j < M; j++) {
            if (A[i][j] != B[i][j]) {
                return "No";
            }
        }
    }

    return "Yes";
}

int main() {
    int N, M;
    cin >> N >> M;

    // Read array A
    vector<vector<int>> A(N, vector<int>(M));
    for (int i = 0; i < N; i++) {
        for (int j = 0; j < M; j++) {
            cin >> A[i][j];
        }
    }

    // Read array B
    vector<vector<int>> B(N, vector<int>(M));
    for (int i = 0; i < N; i++) {
        for (int j = 0; j < M; j++) {
            cin >> B[i][j];
        }
    }

    // Output the result
    cout << canTransform(N, M, A, B) << endl;

    return 0;
}