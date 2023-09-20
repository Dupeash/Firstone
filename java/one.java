import java.util.Scanner;

public class one {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        System.out.println("Enter size");
        int n = sc.nextInt();
        int arr[] = new int[n];
        for (int i = 0; i < n; i++) {
            n = sc.nextInt();

        }
        System.out.println("doing...operation");
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == 0) {
                if (arr[i - 1] < arr[i + 1]) {
                    arr[i] = arr[i - 1];
                } else {
                    arr[i] = arr[i + 1];
                }
            }

        }

        for (int i = 0; i < n; i++) {
            System.out.println(arr[i]);

        }

    }
}