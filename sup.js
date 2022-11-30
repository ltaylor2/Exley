console.log([
    [ 10, '\nI did ' ],  [ 4, 'st off,' ],   [ 26, 'd meet ' ],
    [ 1, 'T/BC\n\nW' ],  [ 9, 'cation.' ],   [ 41, '.\nMy nu' ],
    [ 14, 'Her nam' ],   [ 5, ' beauti' ],   [ 38, 'ught (!' ],
    [ 39, ') in Wa' ],   [ 16, 'ie and ' ],  [ 42, 'mber is' ],
    [ 7, 'hod of ' ],    [ 45, ' shoot ' ],  [ 44, '4-2165,' ],
    [ 0, '\nDear L' ],   [ 37, 'e we bo' ],  [ 18, 'lso won' ],
    [ 32, '12/22 b' ],   [ 15, "e's Kat" ],  [ 22, 'et coff' ],
    [ 30, 'omervil' ],   [ 29, 'ng in S' ],  [ 8, 'communi' ],
    [ 12, ' get ma' ],   [ 48, 'M/EXL\n' ],  [ 23, 'ee / be' ],
    [ 47, 'xt!\n\nSA' ], [ 3, 'p!!\nFir' ],  [ 21, 've to g' ],
    [ 34, ' moving' ],   [ 6, 'ful met' ],   [ 36, 'ew hous' ],
    [ 31, 'le til ' ],   [ 46, 'me a te' ],  [ 25, 'time an' ],
    [ 19, 'derful.' ],   [ 20, "\nI'd lo" ], [ 43, ' 203-49' ],
    [ 27, 'Maya!\nI' ],  [ 13, 'rried! ' ],  [ 17, "she's a" ],
    [ 2, "hat's u" ],    [ 33, 'ut then' ],  [ 40, 'kefield' ],
    [ 35, ' to a n' ],   [ 11, 'in fact' ],  [ 24, 'er some' ],
    [ 28, "'m livi" ]
].sort((a, b) => a[0] - b[0]).map(x => x[1]).join(''))