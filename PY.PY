def split_matrix(matrix):
    n = len(matrix)
    mid = n // 2
    A = [row[:mid] for row in matrix[:mid]]
    B = [row[mid:] for row in matrix[:mid]]
    C = [row[:mid] for row in matrix[mid:]]
    D = [row[mid:] for row in matrix[mid:]]
    return A, B, C, D

def add_matrices(A, B):
    return [[A[i][j] + B[i][j] for j in range(len(A[0]))] for i in range(len(A))]

def subtract_matrices(A, B):
    return [[A[i][j] - B[i][j] for j in range(len(A[0]))] for i in range(len(A))]

def strassen_matrix_multiplication(A, B):
    if len(A) == 1:
        return [[A[0][0] * B[0][0]]]

    A11, A12, A21, A22 = split_matrix(A)
    B11, B12, B21, B22 = split_matrix(B)

    # Recursive steps
    S1 = subtract_matrices(B12, B22)
    S2 = add_matrices(A11, A12)
    S3 = add_matrices(A21, A22)
    S4 = subtract_matrices(B21, B11)
    S5 = add_matrices(A11, A22)
    S6 = add_matrices(B11, B22)
    S7 = subtract_matrices(A12, A22)
    S8 = add_matrices(B21, B22)
    S9 = subtract_matrices(A11, A21)
    S10 = add_matrices(B11, B12)

    P1 = strassen_matrix_multiplication(A11, S1)
    P2 = strassen_matrix_multiplication(S2, B22)
    P3 = strassen_matrix_multiplication(S3, B11)
    P4 = strassen_matrix_multiplication(A22, S4)
    P5 = strassen_matrix_multiplication(S5, S6)
    P6 = strassen_matrix_multiplication(S7, S8)
    P7 = strassen_matrix_multiplication(S9, S10)

    C11 = add_matrices(subtract_matrices(add_matrices(P5, P4), P2), P6)
    C12 = add_matrices(P1, P2)
    C21 = add_matrices(P3, P4)
    C22 = subtract_matrices(subtract_matrices(add_matrices(P5, P1), P3), P7)

    result = []
    for i in range(len(C11)):
        result.append(C11[i] + C12[i])
    for i in range(len(C21)):
        result.append(C21[i] + C22[i])
    return result

# Example usage
A = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]
B = [[17, 18, 19, 20], [21, 22, 23, 24], [25, 26, 27, 28], [29, 30, 31, 32]]
result = strassen_matrix_multiplication(A, B)
for row in result:
    print(row)

