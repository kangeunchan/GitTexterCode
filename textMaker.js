function createPattern(letter, height) {
    if (height % 2 === 0) {
        console.log("Height must be an odd number to properly form the pattern.");
        return;
    }

    const width = height; // Width can be same as height for simplicity
    const mid = Math.floor(height / 2); // Middle row index

    // Create an empty array
    let pattern = Array.from({ length: height }, () => Array(width).fill(' '));

    switch(letter.toUpperCase()) {
        case 'A':
            for (let i = 0; i < height; i++) {
                pattern[i][mid - i] = '*'; // Left diagonal
                pattern[i][mid + i] = '*'; // Right diagonal
                if (i === mid) {
                    for (let j = 0; j < width; j++) {
                        pattern[i][j] = '*'; // Middle horizontal line
                    }
                }
                if (i > mid) {
                    pattern[i][mid - i] = ' ';
                    pattern[i][mid + i] = ' ';
                }
            }
            break;

        case 'B':
            for (let i = 0; i < height; i++) {
                pattern[i][0] = '*'; // Left vertical line
                if (i === 0 || i === mid || i === height - 1) {
                    for (let j = 0; j < mid; j++) {
                        pattern[i][j] = '*'; // Top, middle, and bottom horizontal lines
                    }
                }
                if (i > 0 && i < mid || i > mid && i < height - 1) {
                    pattern[i][mid] = '*'; // Right vertical lines
                }
            }
            break;

        case 'C':
            for (let i = 0; i < height; i++) {
                if (i === 0 || i === height - 1) {
                    for (let j = 1; j < width; j++) {
                        pattern[i][j] = '*'; // Top and bottom horizontal lines
                    }
                } else {
                    pattern[i][0] = '*'; // Left vertical line
                }
            }
            break;

        case 'D':
            for (let i = 0; i < height; i++) {
                pattern[i][0] = '*'; // Left vertical line
                if (i === 0 || i === height - 1) {
                    for (let j = 0; j < mid; j++) {
                        pattern[i][j] = '*'; // Top and bottom horizontal lines
                    }
                }
                if (i > 0 && i < height - 1) {
                    pattern[i][mid] = '*'; // Right vertical line
                }
            }
            break;

        case 'E':
            for (let i = 0; i < height; i++) {
                pattern[i][0] = '*'; // Left vertical line
                if (i === 0 || i === mid || i === height - 1) {
                    for (let j = 0; j < width; j++) {
                        pattern[i][j] = '*'; // Top, middle, and bottom horizontal lines
                    }
                }
            }
            break;

        case 'F':
            for (let i = 0; i < height; i++) {
                pattern[i][0] = '*'; // Left vertical line
                if (i === 0 || i === mid) {
                    for (let j = 0; j < width; j++) {
                        pattern[i][j] = '*'; // Top and middle horizontal lines
                    }
                }
            }
            break;

        case 'G':
            for (let i = 0; i < height; i++) {
                if (i === 0 || i === height - 1) {
                    for (let j = 1; j < width - 1; j++) {
                        pattern[i][j] = '*'; // Top and bottom horizontal lines
                    }
                } else if (i === mid) {
                    for (let j = mid; j < width; j++) {
                        pattern[i][j] = '*'; // Middle horizontal line
                    }
                }
                pattern[i][0] = '*'; // Left vertical line
                if (i > mid) {
                    pattern[i][width - 1] = '*'; // Right vertical line
                }
            }
            break;

        case 'H':
            for (let i = 0; i < height; i++) {
                pattern[i][0] = '*'; // Left vertical line
                pattern[i][width - 1] = '*'; // Right vertical line
                if (i === mid) {
                    for (let j = 0; j < width; j++) {
                        pattern[i][j] = '*'; // Middle horizontal line
                    }
                }
            }
            break;

        case 'I':
            for (let i = 0; i < height; i++) {
                if (i === 0 || i === height - 1) {
                    for (let j = 0; j < width; j++) {
                        pattern[i][j] = '*'; // Top and bottom horizontal lines
                    }
                } else {
                    pattern[i][mid] = '*'; // Middle vertical line
                }
            }
            break;

        case 'J':
            for (let i = 0; i < height; i++) {
                if (i === 0) {
                    for (let j = 0; j < width; j++) {
                        pattern[i][j] = '*'; // Top horizontal line
                    }
                } else if (i === height - 1) {
                    for (let j = 0; j <= mid; j++) {
                        pattern[i][j] = '*'; // Bottom horizontal line
                    }
                } else {
                    pattern[i][mid] = '*'; // Middle vertical line
                }
            }
            break;

        case 'K':
            for (let i = 0; i < height; i++) {
                pattern[i][0] = '*'; // Left vertical line
                pattern[i][Math.abs(mid - i)] = '*'; // Diagonal line
            }
            break;

        case 'L':
            for (let i = 0; i < height; i++) {
                pattern[i][0] = '*'; // Left vertical line
                if (i === height - 1) {
                    for (let j = 0; j < width; j++) {
                        pattern[i][j] = '*'; // Bottom horizontal line
                    }
                }
            }
            break;

        case 'M':
            for (let i = 0; i < height; i++) {
                pattern[i][0] = '*'; // Left vertical line
                pattern[i][width - 1] = '*'; // Right vertical line
                if (i <= mid) {
                    pattern[i][i] = '*'; // Left diagonal
                    pattern[i][width - 1 - i] = '*'; // Right diagonal
                }
            }
            break;

        case 'N':
            for (let i = 0; i < height; i++) {
                pattern[i][0] = '*'; // Left vertical line
                pattern[i][width - 1] = '*'; // Right vertical line
                pattern[i][i] = '*'; // Diagonal line
            }
            break;

        case 'O':
            for (let i = 0; i < height; i++) {
                if (i === 0 || i === height - 1) {
                    for (let j = 1; j < width - 1; j++) {
                        pattern[i][j] = '*'; // Top and bottom horizontal lines
                    }
                } else {
                    pattern[i][0] = '*'; // Left vertical line
                    pattern[i][width - 1] = '*'; // Right vertical line
                }
            }
            break;

        case 'P':
            for (let i = 0; i < height; i++) {
                pattern[i][0] = '*'; // Left vertical line
                if (i === 0 || i === mid) {
                    for (let j = 0; j < width - 1; j++) {
                        pattern[i][j] = '*'; // Top and middle horizontal lines
                    }
                }
                if (i > 0 && i < mid) {
                    pattern[i][width - 1] = '*'; // Right vertical line
                }
            }
            break;

        case 'Q':
            for (let i = 0; i < height; i++) {
                if (i === 0 || i === height - 2) {
                    for (let j = 1; j < width - 1; j++) {
                        pattern[i][j] = '*'; // Top and second to last horizontal lines
                    }
                } else if (i === height - 1) {
                    for (let j = mid; j < width; j++) {
                        pattern[i][j] = '*'; // Bottom right horizontal line
                    }
                } else {
                    pattern[i][0] = '*'; // Left vertical line
                    pattern[i][width - 1] = '*'; // Right vertical line
                }
            }
            pattern[height - 2][width - 2] = '*'; // Bottom diagonal line
            break;

        case 'R':
            for (let i = 0; i < height; i++) {
                pattern[i][0] = '*'; // Left vertical line
                if (i === 0 || i === mid) {
                    for (let j = 0; j < width - 1; j++) {
                        pattern[i][j] = '*'; // Top and middle horizontal lines
                    }
                }
                if (i > 0 && i < mid) {
                    pattern[i][width - 1] = '*'; // Right vertical line
                }
                if (i > mid) {
                    pattern[i][i - mid] = '*'; // Bottom diagonal line
                }
            }
            break;

        case 'S':
            for (let i = 0; i < height; i++) {
                if (i === 0 || i === mid || i === height - 1) {
                    for (let j = 0; j < width; j++) {
                        pattern[i][j] = '*'; // Top, middle, and bottom horizontal lines
                    }
                }
                if (i > 0 && i < mid) {
                    pattern[i][0] = '*'; // Top left vertical line
                }
                if (i > mid && i < height - 1) {
                    pattern[i][width - 1] = '*'; // Bottom right vertical line
                }
            }
            break;

        case 'T':
            for (let i = 0; i < height; i++) {
                if (i === 0) {
                    for (let j = 0; j < width; j++) {
                        pattern[i][j] = '*'; // Top horizontal line
                    }
                } else {
                    pattern[i][mid] = '*'; // Middle vertical line
                }
            }
            break;

        case 'U':
            for (let i = 0; i < height - 1; i++) {
                pattern[i][0] = '*'; // Left vertical line
                pattern[i][width - 1] = '*'; // Right vertical line
            }
            for (let j = 1; j < width - 1; j++) {
                pattern[height - 1][j] = '*'; // Bottom horizontal line
            }
            break;

        case 'V':
            for (let i = 0; i < height - 1; i++) {
                pattern[i][Math.abs(mid - i)] = '*'; // Left diagonal line
                pattern[i][width - 1 - Math.abs(mid - i)] = '*'; // Right diagonal line
            }
            break;

        case 'W':
            for (let i = 0; i < height; i++) {
                pattern[i][0] = '*'; // Left vertical line
                pattern[i][width - 1] = '*'; // Right vertical line
                if (i >= mid) {
                    pattern[i][i - mid] = '*'; // Bottom left diagonal line
                    pattern[i][width - 1 - (i - mid)] = '*'; // Bottom right diagonal line
                }
            }
            break;

        case 'X':
            for (let i = 0; i < height; i++) {
                pattern[i][i] = '*'; // Left to right diagonal line
                pattern[i][width - 1 - i] = '*'; // Right to left diagonal line
            }
            break;

        case 'Y':
            for (let i = 0; i < mid; i++) {
                pattern[i][i] = '*'; // Top left diagonal line
                pattern[i][width - 1 - i] = '*'; // Top right diagonal line
            }
            for (let i = mid; i < height; i++) {
                pattern[i][mid] = '*'; // Bottom vertical line
            }
            break;

        case 'Z':
            for (let i = 0; i < height; i++) {
                if (i === 0 || i === height - 1) {
                    for (let j = 0; j < width; j++) {
                        pattern[i][j] = '*'; // Top and bottom horizontal lines
                    }
                } else {
                    pattern[i][width - 1 - i] = '*'; // Diagonal line
                }
            }
            break;

        default:
            console.log("Pattern for this letter is not defined.");
            return;
    }

    return pattern;
}

// Print the pattern
function printPattern(pattern) {
    for (let row of pattern) {
        console.log(row.join(''));
    }
}

// Example usage
let letter = 'B';
let height = 5; // Adjust height as needed
let pattern = createPattern(letter, height);
if (pattern) {
    printPattern(pattern);
}