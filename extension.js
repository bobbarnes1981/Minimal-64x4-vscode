const vscode = require('vscode');

console.log('extension.js loaded')

function activate(context) {

    console.log('extension.js activate');

    let disposable = vscode.languages.registerHoverProvider('m64x4asm', {
        provideHover(document, position, token) {
            const range = document.getWordRangeAtPosition(position);
            const word = document.getText(range);
            var val;
            switch (word) {
                case "NOP":
                    val="DEC:    0\r\nHEX:    0x00\r\nMne:    NOP\r\n        No operation\r\nType:   -\r\nSize:   -\r\nChange: -\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 16";
                    break;
                case "OUT":
                    val="DEC:    1\r\nHEX:    0x01\r\nMne:    OUT\r\n        Output A to UART: UART = A\r\nType:   -\r\nSize:   -\r\nChange: -\r\nFlags:  N C Z\r\n        1 0 0\r\nCycles: 2";
                    break;
                case "INT":
                    val="DEC:    2\r\nHEX:    0x02\r\nMne:    INT\r\n        Read UART input to A: A = UART\r\nType:   -\r\nSize:   -\r\nChange: R\r\nFlags:  N C Z\r\n        ? ? ?\r\nCycles: 3";
                    break;
                case "INK":
                    val="DEC:    3\r\nHEX:    0x03\r\nMne:    INK\r\n        Read PS/2 input to A: A = PS2\r\nType:   -\r\nSize:   -\r\nChange: R\r\nFlags:  N C Z\r\n        ? ? ?\r\nCycles: 3/4";
                    break;
                case "WIN":
                    val="DEC:    4\r\nHEX:    0x04\r\nMne:    WIN\r\n        Wait for input\r\nType:   -\r\nSize:   -\r\nChange: -\r\nFlags:  N C Z\r\n        ? ? ?\r\nCycles: 2..6";
                    break;
                case "SEC":
                    val="DEC:    5\r\nHEX:    0x05\r\nMne:    SEC\r\n        Set carry flag (C=1)\r\nType:   -\r\nSize:   -\r\nChange: -\r\nFlags:  N C Z\r\n        0 1 0\r\nCycles: 3";
                    break;
                case "CLC":
                    val="DEC:    6\r\nHEX:    0x06\r\nMne:    CLC\r\n        Clear carry flag (C=0)\r\nType:   -\r\nSize:   -\r\nChange: -\r\nFlags:  N C Z\r\n        1 0 0\r\nCycles: 3";
                    break;
                case "LL0":
                    val="DEC:    7\r\nHEX:    0x07\r\nMne:    LL0\r\n        Logical left-shift A 0 steps (C=0)\r\nType:   -\r\nSize:   -\r\nChange: -\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 2";
                    break;
                case "LL1":
                    val="DEC:    8\r\nHEX:    0x08\r\nMne:    LL1\r\n        Logical left-shift A 1 step (C=0)\r\nType:   -\r\nSize:   -\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 3";
                    break;
                case "LL2":
                    val="DEC:    9\r\nHEX:    0x09\r\nMne:    LL2\r\n        Logical left-shift A 2 steps (C=0)\r\nType:   -\r\nSize:   -\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 4";
                    break;
                case "LL3":
                    val="DEC:    10\r\nHEX:    0x0a\r\nMne:    LL3\r\n        Logical left-shift A 3 steps (C=0)\r\nType:   -\r\nSize:   -\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 5";
                    break;
                case "LL4":
                    val="DEC:    11\r\nHEX:    0x0b\r\nMne:    LL4\r\n        Logical left-shift A 4 steps (C=0)\r\nType:   -\r\nSize:   -\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 6";
                    break;
                case "LL5":
                    val="DEC:    12\r\nHEX:    0x0c\r\nMne:    LL5\r\n        Logical left-shift A 5 steps (C=0)\r\nType:   -\r\nSize:   -\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 7";
                    break;
                case "LL6":
                    val="DEC:    13\r\nHEX:    0x0d\r\nMne:    LL6\r\n        Logical left-shift A 6 steps (C=0)\r\nType:   -\r\nSize:   -\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 8";
                    break;
                case "LL7":
                    val="DEC:    14\r\nHEX:    0x0e\r\nMne:    LL7\r\n        Logical left-shift A 7 steps (C=0)\r\nType:   -\r\nSize:   -\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 9";
                    break;
                case "RL0":
                    val="DEC:    15\r\nHEX:    0x0f\r\nMne:    RL0\r\n        Rotate left A 0 steps via C (= RR9)\r\nType:   -\r\nSize:   -\r\nChange: -\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 2";
                    break;
                case "RL1":
                    val="DEC:    16\r\nHEX:    0x10\r\nMne:    RL1\r\n        Rotate left A 1 step via C (= RR8)\r\nType:   -\r\nSize:   -\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 3";
                    break;
                case "RL2":
                    val="DEC:    17\r\nHEX:    0x11\r\nMne:    RL2\r\n        Rotate left A 2 steps via C (= RR7)\r\nType:   -\r\nSize:   -\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 4";
                    break;
                case "RL3":
                    val="DEC:    18\r\nHEX:    0x12\r\nMne:    RL3\r\n        Rotate left A 3 steps via C (= RR6)\r\nType:   -\r\nSize:   -\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 5";
                    break;
                case "RL4":
                    val="DEC:    19\r\nHEX:    0x13\r\nMne:    RL4\r\n        Rotate left A 4 steps via C (= RR5)\r\nType:   -\r\nSize:   -\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 6";
                    break;
                case "RL5":
                    val="DEC:    20\r\nHEX:    0x14\r\nMne:    RL5\r\n        Rotate left A 5 steps via C (= RR4)\r\nType:   -\r\nSize:   -\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 7";
                    break;
                case "RL6":
                    val="DEC:    21\r\nHEX:    0x15\r\nMne:    RL6\r\n        Rotate left A 6 steps via C (= RR3)\r\nType:   -\r\nSize:   -\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 8";
                    break;
                case "RL7":
                    val="DEC:    22\r\nHEX:    0x16\r\nMne:    RL7\r\n        Rotate left A 7 steps via C (= RR2)\r\nType:   -\r\nSize:   -\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 9";
                    break;
                case "RR1":
                    val="DEC:    23\r\nHEX:    0x17\r\nMne:    RR1\r\n        Rotate right A 1 step via C (= RL8)\r\nType:   -\r\nSize:   -\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 10";
                    break;
                case "LR0":
                    val="DEC:    24\r\nHEX:    0x18\r\nMne:    LR0\r\n        Logical right-shift A 0 steps (C=0) (= RR0, RL9)\r\nType:   -\r\nSize:   -\r\nChange: -\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 2";
                    break;
                case "LR1":
                    val="DEC:    25\r\nHEX:    0x19\r\nMne:    LR1\r\n        Logical right-shift A 1 step (C=0)\r\nType:   -\r\nSize:   -\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 10";
                    break;
                case "LR2":
                    val="DEC:    26\r\nHEX:    0x1a\r\nMne:    LR2\r\n        Logical right-shift A 2 steps (C=0)                 §\r\nType:   -\r\nSize:   -\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 15";
                    break;
                case "LR3":
                    val="DEC:    27\r\nHEX:    0x1b\r\nMne:    LR3\r\n        Logical right-shift A 3 steps (C=0)                 §\r\nType:   -\r\nSize:   -\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 15";
                    break;
                case "LR4":
                    val="DEC:    28\r\nHEX:    0x1c\r\nMne:    LR4\r\n        Logical right-shift A 4 steps (C=0)                 §\r\nType:   -\r\nSize:   -\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 15";
                    break;
                case "LR5":
                    val="DEC:    29\r\nHEX:    0x1d\r\nMne:    LR5\r\n        Logical right-shift A 5 steps (C=0)                 §\r\nType:   -\r\nSize:   -\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 15";
                    break;
                case "LR6":
                    val="DEC:    30\r\nHEX:    0x1e\r\nMne:    LR6\r\n        Logical right-shift A 6 steps (C=0)                 §\r\nType:   -\r\nSize:   -\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 13";
                    break;
                case "LR7":
                    val="DEC:    31\r\nHEX:    0x1f\r\nMne:    LR7\r\n        Logical right-shift A 7 steps (C=0)\r\nType:   -\r\nSize:   -\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 5";
                    break;
                case "LLZ":
                    val="DEC:    32\r\nHEX:    0x20\r\nMne:    LLZ\r\n        Logical shift left *Z 1 step (C=0)\r\nType:   Z\r\nSize:   1\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 4";
                    break;
                case "LLB":
                    val="DEC:    33\r\nHEX:    0x21\r\nMne:    LLB\r\n        Logical shift byte left 1 step (C=0)\r\nType:   addr\r\nSize:   2\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 6";
                    break;
                case "LLV":
                    val="DEC:    34\r\nHEX:    0x22\r\nMne:    LLV\r\n        Logical shift fast word left 1 step (C=0)\r\nType:   V\r\nSize:   1\r\nChange: M\r\nFlags:  N C Z\r\n        M M M\r\nCycles: 6";
                    break;
                case "LLW":
                    val="DEC:    35\r\nHEX:    0x23\r\nMne:    LLW\r\n        Logical shift word left 1 step (C=0)\r\nType:   addr\r\nSize:   2\r\nChange: M\r\nFlags:  N C Z\r\n        M M M\r\nCycles: 8";
                    break;
                case "LLQ":
                    val="DEC:    36\r\nHEX:    0x24\r\nMne:    LLQ\r\n        Logical shift fast long left 1 step (C=0)\r\nType:   Q\r\nSize:   1\r\nChange: M\r\nFlags:  N C Z\r\n        M M M\r\nCycles: 10";
                    break;
                case "LLL":
                    val="DEC:    37\r\nHEX:    0x25\r\nMne:    LLL\r\n        Logical shift long left 1 step (C=0)\r\nType:   addr\r\nSize:   2\r\nChange: M\r\nFlags:  N C Z\r\n        M M M\r\nCycles: 12";
                    break;
                case "LRZ":
                    val="DEC:    38\r\nHEX:    0x26\r\nMne:    LRZ\r\n        Logical shift right zero-page byte 1 step (C=0)\r\nType:   Z\r\nSize:   1\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 11";
                    break;
                case "LRB":
                    val="DEC:    39\r\nHEX:    0x27\r\nMne:    LRB\r\n        Logical shift right abs byte 1 step (C=0)\r\nType:   addr\r\nSize:   2\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 13";
                    break;
                case "RLZ":
                    val="DEC:    40\r\nHEX:    0x28\r\nMne:    RLZ\r\n        Rotate left zero-page byte 1 step via C\r\nType:   Z\r\nSize:   1\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 4";
                    break;
                case "RLB":
                    val="DEC:    41\r\nHEX:    0x29\r\nMne:    RLB\r\n        Rotate left byte at abs addr 1 step via C\r\nType:   addr\r\nSize:   2\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 6";
                    break;
                case "RLV":
                    val="DEC:    42\r\nHEX:    0x2a\r\nMne:    RLV\r\n        Rotate left zero-page word 1 step via C\r\nType:   V\r\nSize:   1\r\nChange: M\r\nFlags:  N C Z\r\n        M M M\r\nCycles: 6";
                    break;
                case "RLW":
                    val="DEC:    43\r\nHEX:    0x2b\r\nMne:    RLW\r\n        Rotate left word at abs addr 1 step via C\r\nType:   addr\r\nSize:   2\r\nChange: M\r\nFlags:  N C Z\r\n        M M M\r\nCycles: 8";
                    break;
                case "RLQ":
                    val="DEC:    44\r\nHEX:    0x2c\r\nMne:    RLQ\r\n        Rotate left zero-page long 1 step via C\r\nType:   Q\r\nSize:   1\r\nChange: M\r\nFlags:  N C Z\r\n        M M M\r\nCycles: 10";
                    break;
                case "RLL":
                    val="DEC:    45\r\nHEX:    0x2d\r\nMne:    RLL\r\n        Rotate left abs long 1 step via C\r\nType:   addr\r\nSize:   2\r\nChange: M\r\nFlags:  N C Z\r\n        M M M\r\nCycles: 12";
                    break;
                case "RRZ":
                    val="DEC:    46\r\nHEX:    0x2e\r\nMne:    RRZ\r\n        Rotate right zero-page byte 1 step via C\r\nType:   Z\r\nSize:   1\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 11";
                    break;
                case "RRB":
                    val="DEC:    47\r\nHEX:    0x2f\r\nMne:    RRB\r\n        Rotate right byte at abs addr 1 step via C\r\nType:   addr\r\nSize:   2\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 13";
                    break;
                case "NOT":
                    val="DEC:    48\r\nHEX:    0x30\r\nMne:    NOT\r\n        Bitwise NOT A: A = ~A\r\nType:   -\r\nSize:   -\r\nChange: R\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 4";
                    break;
                case "NOZ":
                    val="DEC:    49\r\nHEX:    0x31\r\nMne:    NOZ\r\n        Bitwise NOT *Z: *Z = ~(*Z)\r\nType:   Z\r\nSize:   1\r\nChange: R\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 5";
                    break;
                case "NOB":
                    val="DEC:    50\r\nHEX:    0x32\r\nMne:    NOB\r\n        Bitwise NOT byte: *addr = ~(*addr)\r\nType:   addr\r\nSize:   2\r\nChange: R\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 7";
                    break;
                case "NOV":
                    val="DEC:    51\r\nHEX:    0x33\r\nMne:    NOV\r\n        Bitwise NOT zero-page word: *V = ~(*V)\r\nType:   V\r\nSize:   1\r\nChange: M\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 7";
                    break;
                case "NOW":
                    val="DEC:    52\r\nHEX:    0x34\r\nMne:    NOW\r\n        Bitwise NOT word at abs address\r\nType:   addr\r\nSize:   2\r\nChange: M\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 9";
                    break;
                case "NOQ":
                    val="DEC:    53\r\nHEX:    0x35\r\nMne:    NOQ\r\n        Bitwise NOT zero-page long\r\nType:   Q\r\nSize:   1\r\nChange: M\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 11";
                    break;
                case "NOL":
                    val="DEC:    54\r\nHEX:    0x36\r\nMne:    NOL\r\n        Bitwise NOT long at abs address\r\nType:   addr\r\nSize:   2\r\nChange: M\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 13";
                    break;
                case "NEG":
                    val="DEC:    55\r\nHEX:    0x37\r\nMne:    NEG\r\n        Negate A: A = -A\r\nType:   -\r\nSize:   -\r\nChange: R\r\nFlags:  N C Z\r\n        R Z R\r\nCycles: 4";
                    break;
                case "NEZ":
                    val="DEC:    56\r\nHEX:    0x38\r\nMne:    NEZ\r\n        Negate zero-page byte: *Z = -(*Z)\r\nType:   Z\r\nSize:   1\r\nChange: R\r\nFlags:  N C Z\r\n        R Z R\r\nCycles: 5";
                    break;
                case "NEB":
                    val="DEC:    57\r\nHEX:    0x39\r\nMne:    NEB\r\n        Negate byte at abs address: *addr = -(*addr)\r\nType:   addr\r\nSize:   2\r\nChange: R\r\nFlags:  N C Z\r\n        R Z R\r\nCycles: 7";
                    break;
                case "NEV":
                    val="DEC:    58\r\nHEX:    0x3a\r\nMne:    NEV\r\n        Negate zero-page word (C = 1 only if word=0)\r\nType:   V\r\nSize:   1\r\nChange: M\r\nFlags:  N C Z\r\n        M Z M\r\nCycles: 7";
                    break;
                case "NEW":
                    val="DEC:    59\r\nHEX:    0x3b\r\nMne:    NEW\r\n        Negate word at abs address (C = 1 only if word=0)\r\nType:   addr\r\nSize:   2\r\nChange: M\r\nFlags:  N C Z\r\n        M Z M\r\nCycles: 9";
                    break;
                case "NEQ":
                    val="DEC:    60\r\nHEX:    0x3c\r\nMne:    NEQ\r\n        Negate zero-page long (C = 1 only if long = 0)\r\nType:   Q\r\nSize:   1\r\nChange: M\r\nFlags:  N C Z\r\n        M Z M\r\nCycles: 11";
                    break;
                case "NEL":
                    val="DEC:    61\r\nHEX:    0x3d\r\nMne:    NEL\r\n        Negate long (C = 1 only if long = 0)\r\nType:   addr\r\nSize:   2\r\nChange: M\r\nFlags:  N C Z\r\n        M Z M\r\nCycles: 13";
                    break;
                case "ANI":
                    val="DEC:    62\r\nHEX:    0x3e\r\nMne:    ANI\r\n        Bitwise AND: A = A & imm\r\nType:   imm\r\nSize:   1\r\nChange: R\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 3";
                    break;
                case "ANZ":
                    val="DEC:    63\r\nHEX:    0x3f\r\nMne:    ANZ\r\n        Bitwise AND: A = A & *Z\r\nType:   Z\r\nSize:   1\r\nChange: R\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 4";
                    break;
                case "ANB":
                    val="DEC:    64\r\nHEX:    0x40\r\nMne:    ANB\r\n        Bitwise AND: A = A & *addr\r\nType:   addr\r\nSize:   2\r\nChange: R\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 6";
                    break;
                case "ANT":
                    val="DEC:    65\r\nHEX:    0x41\r\nMne:    ANT\r\n        Bitwise AND: A = A & *(*Z)\r\nType:   rel Z\r\nSize:   1\r\nChange: R\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 7";
                    break;
                case "ANR":
                    val="DEC:    66\r\nHEX:    0x42\r\nMne:    ANR\r\n        Bitwise AND: A = A & *(*addr)\r\nType:   rel addr\r\nSize:   2\r\nChange: R\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 9";
                    break;
                case "AN.Z":
                    val="DEC:    67\r\nHEX:    0x43\r\nMne:    AN.Z\r\n        Bitwise AND: *Z = *Z & A\r\nType:   Z\r\nSize:   1\r\nChange: R\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 4";
                    break;
                case "AN.B":
                    val="DEC:    68\r\nHEX:    0x44\r\nMne:    AN.B\r\n        Bitwise AND: *addr = *addr & A\r\nType:   addr\r\nSize:   2\r\nChange: R\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 6";
                    break;
                case "ORI":
                    val="DEC:    69\r\nHEX:    0x45\r\nMne:    ORI\r\n        Bitwise OR: A = A | imm\r\nType:   imm\r\nSize:   1\r\nChange: R\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 3";
                    break;
                case "ORZ":
                    val="DEC:    70\r\nHEX:    0x46\r\nMne:    ORZ\r\n        Bitwise OR: A = A | *Z\r\nType:   Z\r\nSize:   1\r\nChange: R\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 4";
                    break;
                case "ORB":
                    val="DEC:    71\r\nHEX:    0x47\r\nMne:    ORB\r\n        Bitwise OR: A = A | *addr\r\nType:   addr\r\nSize:   2\r\nChange: R\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 6";
                    break;
                case "ORT":
                    val="DEC:    72\r\nHEX:    0x48\r\nMne:    ORT\r\n        Bitwise OR: A = A | *(*Z)\r\nType:   rel Z\r\nSize:   1\r\nChange: R\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 7";
                    break;
                case "ORR":
                    val="DEC:    73\r\nHEX:    0x49\r\nMne:    ORR\r\n        Bitwise OR: A = A | *(*addr)\r\nType:   rel addr\r\nSize:   2\r\nChange: R\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 9";
                    break;
                case "OR.Z":
                    val="DEC:    74\r\nHEX:    0x4a\r\nMne:    OR.Z\r\n        Bitwise OR: *Z = *Z | A\r\nType:   Z\r\nSize:   1\r\nChange: R\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 4";
                    break;
                case "OR.B":
                    val="DEC:    75\r\nHEX:    0x4b\r\nMne:    OR.B\r\n        Bitwise OR: *addr = *addr | A\r\nType:   addr\r\nSize:   2\r\nChange: R\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 6";
                    break;
                case "XRI":
                    val="DEC:    76\r\nHEX:    0x4c\r\nMne:    XRI\r\n        Bitwise XOR: A = A ^ imm                            §\r\nType:   imm\r\nSize:   1\r\nChange: R\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 9";
                    break;
                case "XRZ":
                    val="DEC:    77\r\nHEX:    0x4d\r\nMne:    XRZ\r\n        Bitwise XOR: A = A ^ *Z\r\nType:   Z\r\nSize:   1\r\nChange: R\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 10";
                    break;
                case "XRB":
                    val="DEC:    78\r\nHEX:    0x4e\r\nMne:    XRB\r\n        Bitwise XOR: A = A ^ * addr                         §\r\nType:   addr\r\nSize:   2\r\nChange: R\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 12";
                    break;
                case "XRT":
                    val="DEC:    79\r\nHEX:    0x4f\r\nMne:    XRT\r\n        Bitwise XOR: A = A ^ *(*Z)\r\nType:   rel Z\r\nSize:   1\r\nChange: R\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 13";
                    break;
                case "XRR":
                    val="DEC:    80\r\nHEX:    0x50\r\nMne:    XRR\r\n        Bitwise XOR: A = A ^ *(*addr)                       §\r\nType:   rel addr\r\nSize:   2\r\nChange: R\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 15";
                    break;
                case "XR.Z":
                    val="DEC:    81\r\nHEX:    0x51\r\nMne:    XR.Z\r\n        Bitwise XOR: *Z = *Z ^ A\r\nType:   Z\r\nSize:   1\r\nChange: R\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 9";
                    break;
                case "XR.B":
                    val="DEC:    82\r\nHEX:    0x52\r\nMne:    XR.B\r\n        Bitwise XOR: *addr = *addr ^ A\r\nType:   addr\r\nSize:   2\r\nChange: R\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 11";
                    break;
                case "FNE":
                    val="DEC:    83\r\nHEX:    0x53\r\nMne:    FNE\r\n        Fast branch on non-zero\r\nType:   addr lsb\r\nSize:   1\r\nChange: -\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 2";
                    break;
                case "FEQ":
                    val="DEC:    84\r\nHEX:    0x54\r\nMne:    FEQ\r\n        Fast branch on zero\r\nType:   addr lsb\r\nSize:   1\r\nChange: -\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 2";
                    break;
                case "FCC":
                    val="DEC:    85\r\nHEX:    0x55\r\nMne:    FCC\r\n        Fast branch on carry clear\r\nType:   addr lsb\r\nSize:   1\r\nChange: -\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 2";
                    break;
                case "FCS":
                    val="DEC:    86\r\nHEX:    0x56\r\nMne:    FCS\r\n        Fast branch on carry set\r\nType:   addr lsb\r\nSize:   1\r\nChange: -\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 2";
                    break;
                case "FPL":
                    val="DEC:    87\r\nHEX:    0x57\r\nMne:    FPL\r\n        Fast branch on plus\r\nType:   addr lsb\r\nSize:   1\r\nChange: -\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 2";
                    break;
                case "FMI":
                    val="DEC:    88\r\nHEX:    0x58\r\nMne:    FMI\r\n        Fast branch on minus\r\nType:   addr lsb\r\nSize:   1\r\nChange: -\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 2";
                    break;
                case "FGT":
                    val="DEC:    89\r\nHEX:    0x59\r\nMne:    FGT\r\n        Fast branch on greater\r\nType:   addr lsb\r\nSize:   1\r\nChange: -\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 2";
                    break;
                case "FLE":
                    val="DEC:    90\r\nHEX:    0x5a\r\nMne:    FLE\r\n        Fast branch on less or equal\r\nType:   addr lsb\r\nSize:   1\r\nChange: -\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 2";
                    break;
                case "FPA":
                    val="DEC:    91\r\nHEX:    0x5b\r\nMne:    FPA\r\n        Fast jump to lsb addr\r\nType:   addr lsb\r\nSize:   1\r\nChange: -\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 2";
                    break;
                case "BNE":
                    val="DEC:    92\r\nHEX:    0x5c\r\nMne:    BNE\r\n        Branch on non-zero\r\nType:   addr\r\nSize:   2\r\nChange: -\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 4/3";
                    break;
                case "BEQ":
                    val="DEC:    93\r\nHEX:    0x5d\r\nMne:    BEQ\r\n        Branch on zero\r\nType:   addr\r\nSize:   2\r\nChange: -\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 4/3";
                    break;
                case "BCC":
                    val="DEC:    94\r\nHEX:    0x5e\r\nMne:    BCC\r\n        Branch on carry clear\r\nType:   addr\r\nSize:   2\r\nChange: -\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 4/3";
                    break;
                case "BCS":
                    val="DEC:    95\r\nHEX:    0x5f\r\nMne:    BCS\r\n        Branch on carry set\r\nType:   addr\r\nSize:   2\r\nChange: -\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 4/3";
                    break;
                case "BPL":
                    val="DEC:    96\r\nHEX:    0x60\r\nMne:    BPL\r\n        Branch on plus\r\nType:   addr\r\nSize:   2\r\nChange: -\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 4/3";
                    break;
                case "BMI":
                    val="DEC:    97\r\nHEX:    0x61\r\nMne:    BMI\r\n        Branch on minus\r\nType:   addr\r\nSize:   2\r\nChange: -\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 4/3";
                    break;
                case "BGT":
                    val="DEC:    98\r\nHEX:    0x62\r\nMne:    BGT\r\n        Branch on greater\r\nType:   addr\r\nSize:   2\r\nChange: -\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 4/3";
                    break;
                case "BLE":
                    val="DEC:    99\r\nHEX:    0x63\r\nMne:    BLE\r\n        Branch on less or equal\r\nType:   addr\r\nSize:   2\r\nChange: -\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 4/3";
                    break;
                case "JPA":
                    val="DEC:    100\r\nHEX:    0x64\r\nMne:    JPA\r\n        Jump to abs address: PC = addr\r\nType:   addr\r\nSize:   2\r\nChange: -\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 4";
                    break;
                case "JPR":
                    val="DEC:    101\r\nHEX:    0x65\r\nMne:    JPR\r\n        Jump to rel address: PC = *addr\r\nType:   rel addr\r\nSize:   2\r\nChange: -\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 7";
                    break;
                case "JAR":
                    val="DEC:    102\r\nHEX:    0x66\r\nMne:    JAR\r\n        Jump A-indexed to rel address: PC = *(addr + A)\r\nType:   rel addr\r\nSize:   2\r\nChange: -\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 7/9";
                    break;
                case "JPS":
                    val="DEC:    103\r\nHEX:    0x67\r\nMne:    JPS\r\n        Jump to subroutine\r\nType:   addr\r\nSize:   2\r\nChange: ?\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 11";
                    break;
                case "JAS":
                    val="DEC:    104\r\nHEX:    0x68\r\nMne:    JAS\r\n        Jump to subroutine conserving A                     §\r\nType:   addr\r\nSize:   2\r\nChange: -\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 14";
                    break;
                case "RTS":
                    val="DEC:    105\r\nHEX:    0x69\r\nMne:    RTS\r\n        Return from subroutine\r\nType:   -\r\nSize:   -\r\nChange: -\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 10";
                    break;
                case "PHS":
                    val="DEC:    106\r\nHEX:    0x6a\r\nMne:    PHS\r\n        Push A onto stack\r\nType:   -\r\nSize:   -\r\nChange: -\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 8";
                    break;
                case "PLS":
                    val="DEC:    107\r\nHEX:    0x6b\r\nMne:    PLS\r\n        Pull A from stack\r\nType:   -\r\nSize:   -\r\nChange: R\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 6";
                    break;
                case "LDS":
                    val="DEC:    108\r\nHEX:    0x6c\r\nMne:    LDS\r\n        Load from stack: A = *(0xff00 + SP + off)\r\nType:   offset\r\nSize:   1\r\nChange: R\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 6";
                    break;
                case "STS":
                    val="DEC:    109\r\nHEX:    0x6d\r\nMne:    STS\r\n        Store on stack: *(0xff00 + SP + off) = A\r\nType:   offset\r\nSize:   1\r\nChange: -\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 11";
                    break;
                case "RDB":
                    val="DEC:    110\r\nHEX:    0x6e\r\nMne:    RDB\r\n        Read FLASH data from abs 3-byte address\r\nType:   addr,bnk\r\nSize:   2,1\r\nChange: R\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 8";
                    break;
                case "RDR":
                    val="DEC:    111\r\nHEX:    0x6f\r\nMne:    RDR\r\n        Read FLASH data from rel 3-byte address\r\nType:   rel addr\r\nSize:   2\r\nChange: R\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 11";
                    break;
                case "RAP":
                    val="DEC:    112\r\nHEX:    0x70\r\nMne:    RAP\r\n        Read A-indexed FLASH data: A = *(pg<<8 + A)\r\nType:   pg,bnk\r\nSize:   1,1\r\nChange: R\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 7";
                    break;
                case "RZP":
                    val="DEC:    113\r\nHEX:    0x71\r\nMne:    RZP\r\n        Read Z-indexed FLASH data: A = *(pg<<8 + *Z)\r\nType:   Z,pg,bnk\r\nSize:   1,1,1\r\nChange: R\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 9";
                    break;
                case "WDB":
                    val="DEC:    114\r\nHEX:    0x72\r\nMne:    WDB\r\n        Write FLASH data to abs 3-byte address              §\r\nType:   addr,bnk\r\nSize:   2,1\r\nChange: -\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 14";
                    break;
                case "WDR":
                    val="DEC:    115\r\nHEX:    0x73\r\nMne:    WDR\r\n        Write FLASH data to rel 3-byte address              §\r\nType:   rel addr\r\nSize:   2\r\nChange: -\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 16";
                    break;
                case "LDI":
                    val="DEC:    116\r\nHEX:    0x74\r\nMne:    LDI\r\n        Load A immediate: A = imm\r\nType:   imm\r\nSize:   1\r\nChange: R\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 2";
                    break;
                case "LDZ":
                    val="DEC:    117\r\nHEX:    0x75\r\nMne:    LDZ\r\n        Load A from Z: A = *Z\r\nType:   Z\r\nSize:   1\r\nChange: R\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 3";
                    break;
                case "LDB":
                    val="DEC:    118\r\nHEX:    0x76\r\nMne:    LDB\r\n        Load A from abs address: A = *addr\r\nType:   addr\r\nSize:   2\r\nChange: R\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 5";
                    break;
                case "LDT":
                    val="DEC:    119\r\nHEX:    0x77\r\nMne:    LDT\r\n        Load A from rel address in zero page: A = *(*Z)\r\nType:   rel Z\r\nSize:   1\r\nChange: R\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 6";
                    break;
                case "LDR":
                    val="DEC:    120\r\nHEX:    0x78\r\nMne:    LDR\r\n        Load A from relative address: A = *(*addr)\r\nType:   rel addr\r\nSize:   2\r\nChange: R\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 8";
                    break;
                case "LAP":
                    val="DEC:    121\r\nHEX:    0x79\r\nMne:    LAP\r\n        Load A A-indexed from page: A = *(pg<<8 + A)\r\nType:   pg\r\nSize:   1\r\nChange: R\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 4";
                    break;
                case "LAB":
                    val="DEC:    122\r\nHEX:    0x7a\r\nMne:    LAB\r\n        Load A A-indexed from addr: A = *(addr + A)\r\nType:   addr\r\nSize:   2\r\nChange: R\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 5/7";
                    break;
                case "LZP":
                    val="DEC:    123\r\nHEX:    0x7b\r\nMne:    LZP\r\n        Load A Z-indexed from page: A = *(pg<<8 + *Z)\r\nType:   Z,pg\r\nSize:   1,1\r\nChange: R\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 6";
                    break;
                case "LZB":
                    val="DEC:    124\r\nHEX:    0x7c\r\nMne:    LZB\r\n        Load A Z-indexed from addr: A = *(addr + *Z)\r\nType:   Z,addr\r\nSize:   1,2\r\nChange: R\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 7/9";
                    break;
                case "STZ":
                    val="DEC:    125\r\nHEX:    0x7d\r\nMne:    STZ\r\n        Store A to Z: *Z = A\r\nType:   Z\r\nSize:   1\r\nChange: -\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 3";
                    break;
                case "STB":
                    val="DEC:    126\r\nHEX:    0x7e\r\nMne:    STB\r\n        Store A to address: *addr = A\r\nType:   addr\r\nSize:   2\r\nChange: -\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 5";
                    break;
                case "STT":
                    val="DEC:    127\r\nHEX:    0x7f\r\nMne:    STT\r\n        Store A at rel address in zero page: *(*Z) = A\r\nType:   rel Z\r\nSize:   1\r\nChange: -\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 6";
                    break;
                case "STR":
                    val="DEC:    128\r\nHEX:    0x80\r\nMne:    STR\r\n        Store A at relative address: *(*addr) = A\r\nType:   rel addr\r\nSize:   2\r\nChange: -\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 8";
                    break;
                case "SZP":
                    val="DEC:    129\r\nHEX:    0x81\r\nMne:    SZP\r\n        Store A Z-indexed to page: *(pg<<8 + *Z) = A\r\nType:   Z,pg\r\nSize:   1,1\r\nChange: -\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 6";
                    break;
                case "MIZ":
                    val="DEC:    130\r\nHEX:    0x82\r\nMne:    MIZ\r\n        Move imm byte to zero-page: *Z = imm\r\nType:   imm,Z\r\nSize:   1,1\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 4";
                    break;
                case "MIB":
                    val="DEC:    131\r\nHEX:    0x83\r\nMne:    MIB\r\n        Move imm byte to abs addr: *addr = imm\r\nType:   imm,addr\r\nSize:   1,2\r\nChange: R\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 6";
                    break;
                case "MIT":
                    val="DEC:    132\r\nHEX:    0x84\r\nMne:    MIT\r\n        Move imm byte to rel zero-page addr: *(*T) = imm\r\nType:   imm,rel Z\r\nSize:   1,1\r\nChange: R\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 7";
                    break;
                case "MIR":
                    val="DEC:    133\r\nHEX:    0x85\r\nMne:    MIR\r\n        Move imm byte to rel addr: *(*addr) = imm\r\nType:   imm,rel\r\nSize:   1,2\r\nChange: R\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 9";
                    break;
                case "MIV":
                    val="DEC:    134\r\nHEX:    0x86\r\nMne:    MIV\r\n        Move imm word to zero-page word: *V = imm\r\nType:   imm,V\r\nSize:   2,1\r\nChange: M\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 6";
                    break;
                case "MIW":
                    val="DEC:    135\r\nHEX:    0x87\r\nMne:    MIW\r\n        Move imm word to abs addr: *addr = imm\r\nType:   imm,addr\r\nSize:   2,2\r\nChange: M\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 13";
                    break;
                case "MZZ":
                    val="DEC:    136\r\nHEX:    0x88\r\nMne:    MZZ\r\n        Move zero-page byte to zero-page byte: *Z2 = *Z1\r\nType:   Z1,Z2\r\nSize:   1,1\r\nChange: R\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 5";
                    break;
                case "MZB":
                    val="DEC:    137\r\nHEX:    0x89\r\nMne:    MZB\r\n        Move zero-page byte to abs addr: *addr = *Z\r\nType:   Z,addr\r\nSize:   1,2\r\nChange: R\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 7";
                    break;
                case "MBZ":
                    val="DEC:    138\r\nHEX:    0x8a\r\nMne:    MBZ\r\n        Move byte at abs addr to zero-page: *Z = *addr\r\nType:   addr,Z\r\nSize:   2,1\r\nChange: R\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 7";
                    break;
                case "MBB":
                    val="DEC:    139\r\nHEX:    0x8b\r\nMne:    MBB\r\n        Move byte from abs adr1 to abs adr2: *adr2 = *adr1\r\nType:   adr1,adr2\r\nSize:   2,2\r\nChange: R\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 9";
                    break;
                case "MVV":
                    val="DEC:    140\r\nHEX:    0x8c\r\nMne:    MVV\r\n        Move zero-page word to zero-page word: *V2 = *V1\r\nType:   V1,V2\r\nSize:   1,1\r\nChange: M\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 7";
                    break;
                case "MWV":
                    val="DEC:    141\r\nHEX:    0x8d\r\nMne:    MWV\r\n        Move word at abs addr to fast word: *V = *addr\r\nType:   addr,V\r\nSize:   2,1\r\nChange: M\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 9";
                    break;
                case "CLZ":
                    val="DEC:    142\r\nHEX:    0x8e\r\nMne:    CLZ\r\n        Clear Z: *Z = 0x00\r\nType:   Z\r\nSize:   1\r\nChange: -\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 4";
                    break;
                case "CLB":
                    val="DEC:    143\r\nHEX:    0x8f\r\nMne:    CLB\r\n        Clear byte at addr: *addr = 0x00\r\nType:   addr\r\nSize:   2\r\nChange: -\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 6";
                    break;
                case "CLV":
                    val="DEC:    144\r\nHEX:    0x90\r\nMne:    CLV\r\n        Clear fast word: *V = 0x0000\r\nType:   V\r\nSize:   1\r\nChange: -\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 5";
                    break;
                case "CLW":
                    val="DEC:    145\r\nHEX:    0x91\r\nMne:    CLW\r\n        Clear word at addr: *addr = 0x0000\r\nType:   addr\r\nSize:   2\r\nChange: 0\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 7";
                    break;
                case "CLQ":
                    val="DEC:    146\r\nHEX:    0x92\r\nMne:    CLQ\r\n        Clear zero-page long: *Q = 0x00000000\r\nType:   Q\r\nSize:   1\r\nChange: -\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 7";
                    break;
                case "CLL":
                    val="DEC:    147\r\nHEX:    0x93\r\nMne:    CLL\r\n        Clear long: *addr = 0x00000000\r\nType:   addr\r\nSize:   2\r\nChange: 0\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 11";
                    break;
                case "INC":
                    val="DEC:    148\r\nHEX:    0x94\r\nMne:    INC\r\n        Increment A: A = A + 1\r\nType:   -\r\nSize:   -\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 3";
                    break;
                case "INZ":
                    val="DEC:    149\r\nHEX:    0x95\r\nMne:    INZ\r\n        Increment zero-page byte: *Z = *Z + 1\r\nType:   Z\r\nSize:   1\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 5";
                    break;
                case "INB":
                    val="DEC:    150\r\nHEX:    0x96\r\nMne:    INB\r\n        Increment byte at abs addr: *addr = *addr + 1\r\nType:   addr\r\nSize:   2\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 7";
                    break;
                case "INV":
                    val="DEC:    151\r\nHEX:    0x97\r\nMne:    INV\r\n        Increment zero-page word: *V = *V + 0x0001\r\nType:   V\r\nSize:   1\r\nChange: M\r\nFlags:  N C Z\r\n        M M M\r\nCycles: 7";
                    break;
                case "INW":
                    val="DEC:    152\r\nHEX:    0x98\r\nMne:    INW\r\n        Increment word at abs addr: *addr = *addr + 0x0001\r\nType:   addr\r\nSize:   2\r\nChange: M\r\nFlags:  N C Z\r\n        M M M\r\nCycles: 9";
                    break;
                case "INQ":
                    val="DEC:    153\r\nHEX:    0x99\r\nMne:    INQ\r\n        Increment zero-page long: *Q = *Q + 0x00000001\r\nType:   Q\r\nSize:   1\r\nChange: ?\r\nFlags:  N C Z\r\n        ? ? ?\r\nCycles: 6..11";
                    break;
                case "INL":
                    val="DEC:    154\r\nHEX:    0x9a\r\nMne:    INL\r\n        Increment long: *addr = *addr + 0x00000001\r\nType:   addr\r\nSize:   2\r\nChange: ?\r\nFlags:  N C Z\r\n        ? ? ?\r\nCycles: 8..13";
                    break;
                case "DEC":
                    val="DEC:    155\r\nHEX:    0x9b\r\nMne:    DEC\r\n        Decrement A: A = A - 1\r\nType:   -\r\nSize:   -\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 3";
                    break;
                case "DEZ":
                    val="DEC:    156\r\nHEX:    0x9c\r\nMne:    DEZ\r\n        Decrement *Z = *Z - 1\r\nType:   Z\r\nSize:   1\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 5";
                    break;
                case "DEB":
                    val="DEC:    157\r\nHEX:    0x9d\r\nMne:    DEB\r\n        Decrement byte: *addr = *addr - 1\r\nType:   addr\r\nSize:   2\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 7";
                    break;
                case "DEV":
                    val="DEC:    158\r\nHEX:    0x9e\r\nMne:    DEV\r\n        Decrement zero-page word: *V = *V - 0x0001\r\nType:   V\r\nSize:   1\r\nChange: M\r\nFlags:  N C Z\r\n        M M M\r\nCycles: 7";
                    break;
                case "DEW":
                    val="DEC:    159\r\nHEX:    0x9f\r\nMne:    DEW\r\n        Decrement word at abs addr: *addr = *addr - 0x0001\r\nType:   addr\r\nSize:   2\r\nChange: M\r\nFlags:  N C Z\r\n        M M M\r\nCycles: 9";
                    break;
                case "DEQ":
                    val="DEC:    160\r\nHEX:    0xa0\r\nMne:    DEQ\r\n        Decrement zero-page long: *Q = *Q - 0x00000001\r\nType:   Q\r\nSize:   1\r\nChange: ?\r\nFlags:  N C Z\r\n        ? ? ?\r\nCycles: 6..11";
                    break;
                case "DEL":
                    val="DEC:    161\r\nHEX:    0xa1\r\nMne:    DEL\r\n        Decrement long: *addr = *addr - 0x00000001\r\nType:   addr\r\nSize:   2\r\nChange: ?\r\nFlags:  N C Z\r\n        ? ? ?\r\nCycles: 8..13";
                    break;
                case "ADI":
                    val="DEC:    162\r\nHEX:    0xa2\r\nMne:    ADI\r\n        Add immediate to A: A = A + imm\r\nType:   imm\r\nSize:   1\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 3";
                    break;
                case "ADZ":
                    val="DEC:    163\r\nHEX:    0xa3\r\nMne:    ADZ\r\n        Add zero-page byte to A: A = A + *Z\r\nType:   Z\r\nSize:   1\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 4";
                    break;
                case "ADB":
                    val="DEC:    164\r\nHEX:    0xa4\r\nMne:    ADB\r\n        Add byte at addr to A: A = A + *addr\r\nType:   addr\r\nSize:   2\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 6";
                    break;
                case "ADT":
                    val="DEC:    165\r\nHEX:    0xa5\r\nMne:    ADT\r\n        Add byte at rel zero-page addr to A: A = A + *(*Z)\r\nType:   rel Z\r\nSize:   1\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 7";
                    break;
                case "ADR":
                    val="DEC:    166\r\nHEX:    0xa6\r\nMne:    ADR\r\n        Add byte at rel addr to A: A = A + *(*addr)\r\nType:   rel addr\r\nSize:   2\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 9";
                    break;
                case "AD.Z":
                    val="DEC:    167\r\nHEX:    0xa7\r\nMne:    AD.Z\r\n        Add A to zero-page byte: *Z = *Z + A\r\nType:   Z\r\nSize:   1\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 4";
                    break;
                case "AD.B":
                    val="DEC:    168\r\nHEX:    0xa8\r\nMne:    AD.B\r\n        Add A to byte at abs addr: *addr = *addr + A\r\nType:   addr\r\nSize:   2\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 6";
                    break;
                case "AD.T":
                    val="DEC:    169\r\nHEX:    0xa9\r\nMne:    AD.T\r\n        Add A to rel zero-page address: *(*Z) = *(*Z) + A\r\nType:   rel Z\r\nSize:   1\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 7";
                    break;
                case "AD.R":
                    val="DEC:    170\r\nHEX:    0xaa\r\nMne:    AD.R\r\n        Add A to rel address: *(*addr) = *(*addr) + A\r\nType:   rel addr\r\nSize:   2\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 9";
                    break;
                case "ADV":
                    val="DEC:    171\r\nHEX:    0xab\r\nMne:    ADV\r\n        Add A to zero-page word: *V = *V + A\r\nType:   V\r\nSize:   1\r\nChange: M\r\nFlags:  N C Z\r\n        M M M\r\nCycles: 7";
                    break;
                case "ADW":
                    val="DEC:    172\r\nHEX:    0xac\r\nMne:    ADW\r\n        Add A to word at abs addr: *addr = *addr + A\r\nType:   addr\r\nSize:   2\r\nChange: M\r\nFlags:  N C Z\r\n        M M M\r\nCycles: 9";
                    break;
                case "ADQ":
                    val="DEC:    173\r\nHEX:    0xad\r\nMne:    ADQ\r\n        Add A to zero-page long: *Q = *Q + A\r\nType:   Q\r\nSize:   1\r\nChange: ?\r\nFlags:  N C Z\r\n        ? ? ?\r\nCycles: 5..11";
                    break;
                case "ADL":
                    val="DEC:    174\r\nHEX:    0xae\r\nMne:    ADL\r\n        Add A to long: *addr = *addr + A\r\nType:   addr\r\nSize:   2\r\nChange: ?\r\nFlags:  N C Z\r\n        ? ? ?\r\nCycles: 7..13";
                    break;
                case "AIZ":
                    val="DEC:    175\r\nHEX:    0xaf\r\nMne:    AIZ\r\n        Add immediate to zero-page byte: *Z = *Z + imm\r\nType:   imm,Z\r\nSize:   1,1\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 5";
                    break;
                case "AIB":
                    val="DEC:    176\r\nHEX:    0xb0\r\nMne:    AIB\r\n        Add imm to byte at abs addr: *addr = *addr + imm\r\nType:   imm,addr\r\nSize:   1,2\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 7";
                    break;
                case "AIT":
                    val="DEC:    177\r\nHEX:    0xb1\r\nMne:    AIT\r\n        Add imm to byte at rel Z addr: *(*Z) = *(*Z) + imm\r\nType:   imm,rel Z\r\nSize:   1,1\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 8";
                    break;
                case "AIR":
                    val="DEC:    178\r\nHEX:    0xb2\r\nMne:    AIR\r\n        Add imm to byte at rel addr: *(*adr) = *(*adr) + imm\r\nType:   imm,rel\r\nSize:   1,2\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 10";
                    break;
                case "AIV":
                    val="DEC:    179\r\nHEX:    0xb3\r\nMne:    AIV\r\n        Add immediate byte to zero-page word: *V = *V + imm\r\nType:   imm,V\r\nSize:   1,1\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 8";
                    break;
                case "AIW":
                    val="DEC:    180\r\nHEX:    0xb4\r\nMne:    AIW\r\n        Add imm byte to abs word: *addr = *addr + imm\r\nType:   imm,addr\r\nSize:   1,2\r\nChange: M\r\nFlags:  N C Z\r\n        M M M\r\nCycles: 10";
                    break;
                case "AIQ":
                    val="DEC:    181\r\nHEX:    0xb5\r\nMne:    AIQ\r\n        Add immediate byte to zero-page long: *Q = *Q + imm\r\nType:   imm,Q\r\nSize:   1,1\r\nChange: ?\r\nFlags:  N C Z\r\n        ? ? ?\r\nCycles: 6..12";
                    break;
                case "AIL":
                    val="DEC:    182\r\nHEX:    0xb6\r\nMne:    AIL\r\n        Add immediate byte to long: *L = *L + imm\r\nType:   imm,addr\r\nSize:   1,2\r\nChange: ?\r\nFlags:  N C Z\r\n        ? ? ?\r\nCycles: 8..14";
                    break;
                case "AZZ":
                    val="DEC:    183\r\nHEX:    0xb7\r\nMne:    AZZ\r\n        Add zero-page byte to zero-page byte: *Z2 = *Z2 + *Z1\r\nType:   Z1,Z2\r\nSize:   1,1\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 6";
                    break;
                case "AZB":
                    val="DEC:    184\r\nHEX:    0xb8\r\nMne:    AZB\r\n        Add zero-page to byte at abs addr: *addr = *addr + *Z\r\nType:   Z,addr\r\nSize:   1,2\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 8";
                    break;
                case "AZV":
                    val="DEC:    185\r\nHEX:    0xb9\r\nMne:    AZV\r\n        Add zero-page byte to zero-page word: *V = *V + *Z\r\nType:   Z,V\r\nSize:   1,1\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 9";
                    break;
                case "AZW":
                    val="DEC:    186\r\nHEX:    0xba\r\nMne:    AZW\r\n        Add zero-page byte to word at addr: *addr = *addr + *Z\r\nType:   Z,addr\r\nSize:   1,2\r\nChange: M\r\nFlags:  N C Z\r\n        M M M\r\nCycles: 11";
                    break;
                case "AZQ":
                    val="DEC:    187\r\nHEX:    0xbb\r\nMne:    AZQ\r\n        Add zero-page byte to zero-page long: *Q = *Q + *Z\r\nType:   Z,Q\r\nSize:   1,1\r\nChange: ?\r\nFlags:  N C Z\r\n        ? ? ?\r\nCycles: 7..13";
                    break;
                case "AZL":
                    val="DEC:    188\r\nHEX:    0xbc\r\nMne:    AZL\r\n        Add zero-page byte to long: *L = *L + *Z\r\nType:   Z,addr\r\nSize:   1,2\r\nChange: ?\r\nFlags:  N C Z\r\n        ? ? ?\r\nCycles: 9..15";
                    break;
                case "ABZ":
                    val="DEC:    189\r\nHEX:    0xbd\r\nMne:    ABZ\r\n        Add abs byte to zero-page byte: *Z = *Z + *addr\r\nType:   addr,Z\r\nSize:   2,1\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 8";
                    break;
                case "ABB":
                    val="DEC:    190\r\nHEX:    0xbe\r\nMne:    ABB\r\n        Add abs byte to byte: *adr2 = *adr2 + *adr1\r\nType:   adr1,adr2\r\nSize:   2,2\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 10";
                    break;
                case "ABV":
                    val="DEC:    191\r\nHEX:    0xbf\r\nMne:    ABV\r\n        Add abs byte to zero-page word: *V = *V + *addr\r\nType:   addr,V\r\nSize:   2,1\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 11";
                    break;
                case "ABW":
                    val="DEC:    192\r\nHEX:    0xc0\r\nMne:    ABW\r\n        Add byte at ad1 to word at ad2: *ad2 = *ad2 + *ad1\r\nType:   ad1,ad2\r\nSize:   2,2\r\nChange: M\r\nFlags:  N C Z\r\n        M M M\r\nCycles: 13";
                    break;
                case "ABQ":
                    val="DEC:    193\r\nHEX:    0xc1\r\nMne:    ABQ\r\n        Add abs byte to zero-page long: *Q = *Q + *addr\r\nType:   addr,Q\r\nSize:   2,1\r\nChange: ?\r\nFlags:  N C Z\r\n        ? ? ?\r\nCycles: 9..15";
                    break;
                case "AVV":
                    val="DEC:    194\r\nHEX:    0xc2\r\nMne:    AVV\r\n        Add zero-page word to zero-page word: *V2 = *V2 + *V1\r\nType:   V1,V2\r\nSize:   1,1\r\nChange: M\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 14";
                    break;
                case "SUI":
                    val="DEC:    195\r\nHEX:    0xc3\r\nMne:    SUI\r\n        Sub immediate from A: A = A - imm\r\nType:   imm\r\nSize:   1\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 3";
                    break;
                case "SUZ":
                    val="DEC:    196\r\nHEX:    0xc4\r\nMne:    SUZ\r\n        Sub zero-page byte from A: A = A - *Z\r\nType:   Z\r\nSize:   1\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 4";
                    break;
                case "SUB":
                    val="DEC:    197\r\nHEX:    0xc5\r\nMne:    SUB\r\n        Sub byte at addr from A: A = A - *addr\r\nType:   addr\r\nSize:   2\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 6";
                    break;
                case "SUT":
                    val="DEC:    198\r\nHEX:    0xc6\r\nMne:    SUT\r\n        Sub byte at rel zero-page addr from A: A = A - *(*Z)\r\nType:   rel Z\r\nSize:   1\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 7";
                    break;
                case "SUR":
                    val="DEC:    199\r\nHEX:    0xc7\r\nMne:    SUR\r\n        Sub byte at rel addr from A: A = A - *(*addr)\r\nType:   rel addr\r\nSize:   2\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 9";
                    break;
                case "SU.Z":
                    val="DEC:    200\r\nHEX:    0xc8\r\nMne:    SU.Z\r\n        Sub A from zero-page byte: *Z = *Z - A\r\nType:   Z\r\nSize:   1\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 5";
                    break;
                case "SU.B":
                    val="DEC:    201\r\nHEX:    0xc9\r\nMne:    SU.B\r\n        Sub A from byte at abs addr: *addr = *addr - A\r\nType:   addr\r\nSize:   2\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 7";
                    break;
                case "SU.T":
                    val="DEC:    202\r\nHEX:    0xca\r\nMne:    SU.T\r\n        Sub A from rel zero-page address: *(*Z) = *(*Z) - A\r\nType:   rel Z\r\nSize:   1\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 8";
                    break;
                case "SU.R":
                    val="DEC:    203\r\nHEX:    0xcb\r\nMne:    SU.R\r\n        Sub A from byte at rel addr: *(*addr) = *(*addr) - A\r\nType:   rel addr\r\nSize:   2\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 10";
                    break;
                case "SUV":
                    val="DEC:    204\r\nHEX:    0xcc\r\nMne:    SUV\r\n        Sub A from zero-page word: *v = *V - A\r\nType:   V\r\nSize:   1\r\nChange: M\r\nFlags:  N C Z\r\n        M M M\r\nCycles: 8";
                    break;
                case "SUW":
                    val="DEC:    205\r\nHEX:    0xcd\r\nMne:    SUW\r\n        Sub A from word at abs addr: *addr = *addr - A\r\nType:   addr\r\nSize:   2\r\nChange: M\r\nFlags:  N C Z\r\n        M M M\r\nCycles: 10";
                    break;
                case "SUQ":
                    val="DEC:    206\r\nHEX:    0xce\r\nMne:    SUQ\r\n        Sub A from zero-page long: *Q = *Q - A\r\nType:   Q\r\nSize:   1\r\nChange: ?\r\nFlags:  N C Z\r\n        ? ? ?\r\nCycles: 6..12";
                    break;
                case "SU.L":
                    val="DEC:    207\r\nHEX:    0xcf\r\nMne:    SU.L\r\n        Sub A from long: *addr = *addr - A\r\nType:   addr\r\nSize:   2\r\nChange: ?\r\nFlags:  N C Z\r\n        ? ? ?\r\nCycles: 8..14";
                    break;
                case "SIZ":
                    val="DEC:    208\r\nHEX:    0xd0\r\nMne:    SIZ\r\n        Sub immediate from zero-page byte: *Z = *Z - imm\r\nType:   imm,Z\r\nSize:   1,1\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 5";
                    break;
                case "SIB":
                    val="DEC:    209\r\nHEX:    0xd1\r\nMne:    SIB\r\n        Sub imm from byte: *addr = *addr - imm\r\nType:   imm,addr\r\nSize:   1,2\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 7";
                    break;
                case "SIT":
                    val="DEC:    210\r\nHEX:    0xd2\r\nMne:    SIT\r\n        Sub imm from byte at rel Z addr: *(*Z) = *(*Z) + imm\r\nType:   imm,rel Z\r\nSize:   1,1\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 8";
                    break;
                case "SIR":
                    val="DEC:    211\r\nHEX:    0xd3\r\nMne:    SIR\r\n        Sub imm from byte at rel addr: *(*ad) = *(*ad) + imm\r\nType:   imm,addr\r\nSize:   1,2\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 10";
                    break;
                case "SIV":
                    val="DEC:    212\r\nHEX:    0xd4\r\nMne:    SIV\r\n        Sub imm byte from zero-page word: *V = *V - imm\r\nType:   imm,V\r\nSize:   1,1\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 8";
                    break;
                case "SIW":
                    val="DEC:    213\r\nHEX:    0xd5\r\nMne:    SIW\r\n        Sub imm byte from abs word: *addr = *addr - imm\r\nType:   imm,addr\r\nSize:   1,2\r\nChange: M\r\nFlags:  N C Z\r\n        M M M\r\nCycles: 10";
                    break;
                case "SIQ":
                    val="DEC:    214\r\nHEX:    0xd6\r\nMne:    SIQ\r\n        Sub imm byte from zero-page long Z: *Z = *Z - imm\r\nType:   imm,Q\r\nSize:   1,1\r\nChange: ?\r\nFlags:  N C Z\r\n        ? ? ?\r\nCycles: 6..12";
                    break;
                case "SIL":
                    val="DEC:    215\r\nHEX:    0xd7\r\nMne:    SIL\r\n        Sub imm byte from long at abs address: *L = *L - imm\r\nType:   imm,addr\r\nSize:   1,2\r\nChange: ?\r\nFlags:  N C Z\r\n        ? ? ?\r\nCycles: 8..14";
                    break;
                case "SZZ":
                    val="DEC:    216\r\nHEX:    0xd8\r\nMne:    SZZ\r\n        Sub zero-page byte from Z byte: *Z2 = *Z2 - *Z1\r\nType:   Z1,Z2\r\nSize:   1,1\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 6";
                    break;
                case "SZB":
                    val="DEC:    217\r\nHEX:    0xd9\r\nMne:    SZB\r\n        Sub zero-page byte from abs byte: *addr = *addr - *Z\r\nType:   Z,addr\r\nSize:   1,2\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 8";
                    break;
                case "SZV":
                    val="DEC:    218\r\nHEX:    0xda\r\nMne:    SZV\r\n        Sub zero-page byte from zero-page word: *V = *V - *Z\r\nType:   Z,V\r\nSize:   1,1\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 9";
                    break;
                case "SZW":
                    val="DEC:    219\r\nHEX:    0xdb\r\nMne:    SZW\r\n        Sub zero-page byte from abs word: *addr = *addr - *Z\r\nType:   Z,addr\r\nSize:   1,2\r\nChange: M\r\nFlags:  N C Z\r\n        M M M\r\nCycles: 11";
                    break;
                case "SZQ":
                    val="DEC:    220\r\nHEX:    0xdc\r\nMne:    SZQ\r\n        Sub zero-page byte from zero-page long: *Q = *Q - *Z\r\nType:   Z,Q\r\nSize:   1,1\r\nChange: ?\r\nFlags:  N C Z\r\n        ? ? ?\r\nCycles: 7..13";
                    break;
                case "SZL":
                    val="DEC:    221\r\nHEX:    0xdd\r\nMne:    SZL\r\n        Sub zero-page byte from long: *L = *L - *Z\r\nType:   Z,addr\r\nSize:   1,2\r\nChange: ?\r\nFlags:  N C Z\r\n        ? ? ?\r\nCycles: 9..15";
                    break;
                case "SBZ":
                    val="DEC:    222\r\nHEX:    0xde\r\nMne:    SBZ\r\n        Sub abs byte from zero-page byte: *Z = *Z - *addr\r\nType:   addr,Z\r\nSize:   2,1\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 8";
                    break;
                case "SBB":
                    val="DEC:    223\r\nHEX:    0xdf\r\nMne:    SBB\r\n        Sub abs byte from byte: *adr2 = *adr2 - *adr1\r\nType:   adr1,adr2\r\nSize:   2,2\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 10";
                    break;
                case "SBV":
                    val="DEC:    224\r\nHEX:    0xe0\r\nMne:    SBV\r\n        Sub abs byte from zero-page word: *V = *V - *addr\r\nType:   addr,V\r\nSize:   2,1\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 11";
                    break;
                case "SBW":
                    val="DEC:    225\r\nHEX:    0xe1\r\nMne:    SBW\r\n        Sub abs byte from word at adr2: *adr2 = *adr2 - *adr1\r\nType:   adr1,adr2\r\nSize:   2,2\r\nChange: M\r\nFlags:  N C Z\r\n        M M M\r\nCycles: 13";
                    break;
                case "SBQ":
                    val="DEC:    226\r\nHEX:    0xe2\r\nMne:    SBQ\r\n        Sub abs byte from zero-page long: *Q = *Q - *addr\r\nType:   addr,Q\r\nSize:   2,1\r\nChange: ?\r\nFlags:  N C Z\r\n        ? ? ?\r\nCycles: 9..15";
                    break;
                case "SVV":
                    val="DEC:    227\r\nHEX:    0xe3\r\nMne:    SVV\r\n        Sub zero-page word from word: *V2 = *V2 - *V1\r\nType:   V1,V2\r\nSize:   1,1\r\nChange: M\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 14";
                    break;
                case "CPI":
                    val="DEC:    228\r\nHEX:    0xe4\r\nMne:    CPI\r\n        Compare immediate value to A: eval A - imm\r\nType:   imm\r\nSize:   1\r\nChange: -\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 3";
                    break;
                case "CPZ":
                    val="DEC:    229\r\nHEX:    0xe5\r\nMne:    CPZ\r\n        Compare zero-page byte to A: eval A - *Z\r\nType:   Z\r\nSize:   1\r\nChange: -\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 4";
                    break;
                case "CPB":
                    val="DEC:    230\r\nHEX:    0xe6\r\nMne:    CPB\r\n        Compare byte at addr to A: eval A - *addr\r\nType:   addr\r\nSize:   2\r\nChange: -\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 6";
                    break;
                case "CPT":
                    val="DEC:    231\r\nHEX:    0xe7\r\nMne:    CPT\r\n        Compare byte at rel Z to A: eval A - *(*Z)\r\nType:   rel Z\r\nSize:   1\r\nChange: -\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 7";
                    break;
                case "CPR":
                    val="DEC:    232\r\nHEX:    0xe8\r\nMne:    CPR\r\n        Compare rel byte to A: eval A - *(*addr)\r\nType:   rel addr\r\nSize:   2\r\nChange: -\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 9";
                    break;
                case "CIZ":
                    val="DEC:    233\r\nHEX:    0xe9\r\nMne:    CIZ\r\n        Compare imm to zero-page byte: A = *Z - imm\r\nType:   imm,Z\r\nSize:   1,1\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 5";
                    break;
                case "CIB":
                    val="DEC:    234\r\nHEX:    0xea\r\nMne:    CIB\r\n        Compare imm to byte at abs addr: A = *addr - imm\r\nType:   imm,addr\r\nSize:   1,2\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 7";
                    break;
                case "CIT":
                    val="DEC:    235\r\nHEX:    0xeb\r\nMne:    CIT\r\n        Compare imm to byte at rel Z: A = *(*Z) - imm\r\nType:   imm,rel Z\r\nSize:   1,1\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 8";
                    break;
                case "CIR":
                    val="DEC:    236\r\nHEX:    0xec\r\nMne:    CIR\r\n        Compare imm to byte at rel addr: A = *(*addr) - imm\r\nType:   imm,addr\r\nSize:   1,2\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 10";
                    break;
                case "CZZ":
                    val="DEC:    237\r\nHEX:    0xed\r\nMne:    CZZ\r\n        Compare zero-page byte to byte: A = *Z2 - *Z1\r\nType:   Z1,Z2\r\nSize:   1,1\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 6";
                    break;
                case "CZB":
                    val="DEC:    238\r\nHEX:    0xee\r\nMne:    CZB\r\n        Compare zero-page byte to byte: A = *addr - *Z\r\nType:   Z,addr\r\nSize:   1,2\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 8";
                    break;
                case "CBZ":
                    val="DEC:    239\r\nHEX:    0xef\r\nMne:    CBZ\r\n        Compare abs byte to zero-page byte: A = *addr - *Z\r\nType:   addr,Z\r\nSize:   2,1\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 8";
                    break;
                case "CBB":
                    val="DEC:    240\r\nHEX:    0xf0\r\nMne:    CBB\r\n        Compare abs byte to byte: A = *adr2 - *adr1\r\nType:   adr1,adr2\r\nSize:   2,2\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 10";
                    break;
                case "ACI":
                    val="DEC:    241\r\nHEX:    0xf1\r\nMne:    ACI\r\n        Add immediate value to A with C: A = A + imm + C\r\nType:   imm\r\nSize:   1\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 3";
                    break;
                case "ACZ":
                    val="DEC:    242\r\nHEX:    0xf2\r\nMne:    ACZ\r\n        Add zero-page byte with C to A: A = A + *Z + C\r\nType:   Z\r\nSize:   1\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 4";
                    break;
                case "ACB":
                    val="DEC:    243\r\nHEX:    0xf3\r\nMne:    ACB\r\n        Add byte at addr with C to A: A = A + *addr + C\r\nType:   addr\r\nSize:   2\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 6";
                    break;
                case "AC.Z":
                    val="DEC:    244\r\nHEX:    0xf4\r\nMne:    AC.Z\r\n        Add A with C to zero-page byte: *Z = *Z + A + C\r\nType:   Z\r\nSize:   1\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 4";
                    break;
                case "AC.B":
                    val="DEC:    245\r\nHEX:    0xf5\r\nMne:    AC.B\r\n        Add A with C to byte at addr: *addr = *addr + A + C\r\nType:   addr\r\nSize:   2\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 6";
                    break;
                case "ACV":
                    val="DEC:    246\r\nHEX:    0xf6\r\nMne:    ACV\r\n        Add A with C to zero-page word\r\nType:   V\r\nSize:   1\r\nChange: M\r\nFlags:  N C Z\r\n        M M M\r\nCycles: 7";
                    break;
                case "ACW":
                    val="DEC:    247\r\nHEX:    0xf7\r\nMne:    ACW\r\n        Add A with C to word at ads addr: *adr = *adr + A + C\r\nType:   addr\r\nSize:   2\r\nChange: M\r\nFlags:  N C Z\r\n        M M M\r\nCycles: 9";
                    break;
                case "SCI":
                    val="DEC:    248\r\nHEX:    0xf8\r\nMne:    SCI\r\n        Sub imm value from A with C: A = A - imm - 1 + C\r\nType:   imm\r\nSize:   1\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 3";
                    break;
                case "SCZ":
                    val="DEC:    249\r\nHEX:    0xf9\r\nMne:    SCZ\r\n        Sub zero-page byte with C from A: A = A - *Z - 1 + C\r\nType:   Z\r\nSize:   1\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 4";
                    break;
                case "SCB":
                    val="DEC:    250\r\nHEX:    0xfa\r\nMne:    SCB\r\n        Sub byte at addr from A with C: A = A - *addr - 1 + C\r\nType:   addr\r\nSize:   2\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 6";
                    break;
                case "SC.Z":
                    val="DEC:    251\r\nHEX:    0xfb\r\nMne:    SC.Z\r\n        Sub A with C from zero-page byte: *Z = *Z - A - 1 + C\r\nType:   Z\r\nSize:   1\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 5";
                    break;
                case "SC.B":
                    val="DEC:    252\r\nHEX:    0xfc\r\nMne:    SC.B\r\n        Sub A with C from byte: *addr = *addr - A - 1 + C\r\nType:   addr\r\nSize:   2\r\nChange: R\r\nFlags:  N C Z\r\n        R R R\r\nCycles: 7";
                    break;
                case "SCV":
                    val="DEC:    253\r\nHEX:    0xfd\r\nMne:    SCV\r\n        Sub A with C from zero-page word\r\nType:   V\r\nSize:   1\r\nChange: M\r\nFlags:  N C Z\r\n        M M M\r\nCycles: 8";
                    break;
                case "SCW":
                    val="DEC:    254\r\nHEX:    0xfe\r\nMne:    SCW\r\n        Sub A with C from word at abs addr\r\nType:   addr\r\nSize:   2\r\nChange: M\r\nFlags:  N C Z\r\n        M M M\r\nCycles: 10";
                    break;
                case "-":
                    val="DEC:    255\r\nHEX:    0xff\r\nMne:    -\r\n        Set bank register to 0xff (FLASH OFF) after boot-up\r\nType:   -\r\nSize:   -\r\nChange: -\r\nFlags:  N C Z\r\n        - - -\r\nCycles: 2";
                    break;
            }
            if (val) {
              return new vscode.Hover({
                    language: "Hello language",
                    value: val
                });
            }
        }
    });
    context.subscriptions.push(disposable);
}

function deactivate() {

    console.log('extension.js deactivate');

 }

module.exports = {
    activate,
    deactivate
}