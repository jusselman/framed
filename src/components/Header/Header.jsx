import React from 'react';
import './Header.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <header>

            <Link to="/">
                <span className="logo">
                    <svg className="rat-svg" version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="800.000000pt" height="600.000000pt" viewBox="0 0 800.000000 600.000000"
                        preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,600.000000) scale(0.100000,-0.100000)"
                            fill="#000000" stroke="none">
                            <path d="M3810 5484 c-465 -40 -842 -170 -1215 -418 -134 -89 -225 -165 -375
                            -316 -387 -387 -625 -872 -701 -1430 -17 -121 -17 -497 -1 -615 60 -435 209
                            -810 457 -1150 366 -502 919 -858 1515 -974 188 -37 282 -45 490 -45 208 0
                            302 8 490 45 502 98 983 370 1333 753 357 391 566 840 639 1371 16 118 16 483
                            -1 610 -58 449 -227 857 -510 1225 -82 107 -309 334 -421 421 -356 275 -744
                            439 -1192 504 -101 15 -420 27 -508 19z m490 -518 c398 -62 794 -266 1078
                            -554 304 -308 487 -665 559 -1092 22 -132 25 -464 4 -590 -33 -207 -101 -430
                            -176 -580 -297 -595 -824 -986 -1475 -1097 -146 -25 -474 -25 -620 0 -423 72
                            -789 259 -1087 555 -304 301 -494 680 -564 1122 -21 126 -18 458 4 590 72 427
                            255 784 559 1092 296 300 721 512 1118 558 58 6 112 13 120 15 35 9 393 -5
                            480 -19z"/>
                            <path d="M4020 4680 c-216 -57 -299 -113 -483 -322 -79 -91 -144 -138 -196
                            -145 -45 -6 -54 3 -70 77 -15 69 -48 130 -83 149 -23 13 -30 13 -67 -4 -38
                            -17 -111 -86 -138 -131 -11 -18 -11 -18 -6 2 11 48 -105 137 -152 116 -46 -21
                            -87 -151 -101 -319 l-7 -82 -44 -15 c-93 -32 -211 -146 -368 -356 -43 -58
                            -100 -128 -126 -156 -27 -29 -51 -64 -55 -78 -13 -53 20 -144 89 -245 43 -63
                            136 -104 322 -142 82 -17 161 -37 177 -45 16 -8 68 -54 116 -103 114 -115 203
                            -162 319 -168 112 -6 123 -9 123 -38 0 -36 -31 -50 -164 -75 -202 -37 -255
                            -61 -292 -132 -14 -27 -13 -32 6 -63 13 -20 30 -35 41 -35 12 0 19 -7 19 -20
                            0 -18 6 -20 68 -19 60 2 70 5 99 32 17 16 37 27 45 24 7 -2 40 11 73 29 33 18
                            96 43 140 55 108 29 375 79 392 72 18 -7 43 15 43 38 0 28 12 29 76 11 49 -13
                            114 -16 394 -17 184 0 409 2 500 5 160 5 165 4 165 -15 0 -19 -9 -20 -140 -26
                            -203 -10 -264 -31 -250 -88 3 -14 6 -34 6 -44 0 -10 11 -22 27 -27 15 -6 35
                            -15 46 -21 15 -9 31 -4 80 20 96 48 176 56 326 31 183 -29 214 -28 256 14 29
                            29 34 41 34 79 l0 45 30 -11 c24 -9 43 -8 93 5 34 9 64 14 66 12 2 -2 -2 -47
                            -9 -101 -24 -194 -75 -308 -190 -424 -160 -160 -368 -229 -695 -229 -156 0
                            -306 21 -505 68 -281 68 -340 76 -555 76 -181 1 -207 -1 -272 -22 -39 -12 -91
                            -37 -115 -55 -47 -36 -108 -111 -108 -133 0 -21 54 -18 209 13 114 23 162 27
                            296 26 181 0 333 -22 650 -96 l180 -41 245 0 c269 -1 338 9 511 75 239 92 417
                            297 490 564 16 61 22 118 26 240 4 151 6 164 33 226 171 381 58 838 -356 1434
                            -127 183 -201 259 -347 355 -104 69 -195 109 -333 146 -87 24 -121 27 -284 31
                            -180 3 -188 2 -300 -27z"/>
                        </g>
                    </svg>
                </span>
            </Link>
            <motion.div className="title"
                initial={{ x: -1000 }}
                animate={{ x: 0 }}
                transition={{ delay: .1, type: 'tween' }}
            >
                <h1>Rat Estates</h1>
            </motion.div>
        </header>
    )
}

export default Header;