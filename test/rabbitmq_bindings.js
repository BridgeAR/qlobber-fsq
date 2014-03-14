/*globals global */
/*jslint node: true */
"use strict";

global.rabbitmq_test_bindings = [
    ["a.b.c",         "t1"],
    ["a.*.c",         "t2"],
    ["a.#.b",         "t3"],
    ["a.b.b.c",       "t4"],
    ["#",             "t5"],
    ["#.#",           "t6"],
    ["#.b",           "t7"],
    ["*.*",           "t8"],
    ["a.*",           "t9"],
    ["*.b.c",         "t10"],
    ["a.#",           "t11"],
    ["a.#.#",         "t12"],
    ["b.b.c",         "t13"],
    ["a.b.b",         "t14"],
    ["a.b",           "t15"],
    ["b.c",           "t16"],
    ["",              "t17"],
    ["*.*.*",         "t18"],
    ["vodka.martini", "t19"],
    ["a.b.c",         "t20"],
    ["*.#",           "t21"],
    ["#.*.#",         "t22"],
    ["*.#.#",         "t23"],
    ["#.#.#",         "t24"],
    ["*",             "t25"],
    ["#.b.#",         "t26"]
];

global.rabbitmq_expected_results_before_remove = [
    ["a.b.c",               ["t1", "t2", "t5", "t6", "t10", "t11", "t12",
                             "t18", "t20", "t21", "t22", "t23", "t24",
                             "t26"]],
    ["a.b",                 ["t3", "t5", "t6", "t7", "t8", "t9", "t11",
                             "t12", "t15", "t21", "t22", "t23", "t24",
                             "t26"]],
    ["a.b.b",               ["t3", "t5", "t6", "t7", "t11", "t12", "t14",
                             "t18", "t21", "t22", "t23", "t24", "t26"]],
    ["",                    ["t5", "t6", "t17", "t24"]],
    ["b.c.c",               ["t5", "t6", "t18", "t21", "t22", "t23",
                             "t24", "t26"]],
    ["a.a.a.a.a",           ["t5", "t6", "t11", "t12", "t21", "t22",
                             "t23", "t24"]],
    ["vodka.gin",           ["t5", "t6", "t8", "t21", "t22", "t23",
                             "t24"]],
    ["vodka.martini",       ["t5", "t6", "t8", "t19", "t21", "t22", "t23",
                             "t24"]],
    ["b.b.c",               ["t5", "t6", "t10", "t13", "t18", "t21",
                             "t22", "t23", "t24", "t26"]],
    ["nothing.here.at.all", ["t5", "t6", "t21", "t22", "t23", "t24"]],
    ["oneword",             ["t5", "t6", "t21", "t22", "t23", "t24",
                             "t25"]]
];

global.rabbitmq_bindings_to_remove = [1, 5, 11, 19, 21];

global.rabbitmq_expected_results_after_remove = [
    ["a.b.c",               ["t2", "t6", "t10", "t12", "t18", "t20", "t22",
                             "t23", "t24", "t26"]],
    ["a.b",                 ["t3", "t6", "t7", "t8", "t9", "t12", "t15",
                             "t22", "t23", "t24", "t26"]],
    ["a.b.b",               ["t3", "t6", "t7", "t12", "t14", "t18", "t22",
                             "t23", "t24", "t26"]],
    ["",                    ["t6", "t17", "t24"]],
    ["b.c.c",               ["t6", "t18", "t22", "t23", "t24", "t26"]],
    ["a.a.a.a.a",           ["t6", "t12", "t22", "t23", "t24"]],
    ["vodka.gin",           ["t6", "t8", "t22", "t23", "t24"]],
    ["vodka.martini",       ["t6", "t8", "t22", "t23", "t24"]],
    ["b.b.c",               ["t6", "t10", "t13", "t18", "t22", "t23",
                             "t24", "t26"]],
    ["nothing.here.at.all", ["t6", "t22", "t23", "t24"]],
    ["oneword",             ["t6", "t22", "t23", "t24", "t25"]]
];

global.rabbitmq_expected_results_after_remove_all = [
    ["a.b.c",               ["t2", "t6", "t10", "t12", "t18", "t22",
                             "t23", "t24", "t26"]],
    ["a.b",                 ["t3", "t6", "t7", "t8", "t9", "t12", "t15",
                             "t22", "t23", "t24", "t26"]],
    ["a.b.b",               ["t3", "t6", "t7", "t12", "t14", "t18", "t22",
                             "t23", "t24", "t26"]],
    ["",                    ["t6", "t17", "t24"]],
    ["b.c.c",               ["t6", "t18", "t22", "t23", "t24", "t26"]],
    ["a.a.a.a.a",           ["t6", "t12", "t22", "t23", "t24"]],
    ["vodka.gin",           ["t6", "t8", "t22", "t23", "t24"]],
    ["vodka.martini",       ["t6", "t8", "t22", "t23", "t24"]],
    ["b.b.c",               ["t6", "t10", "t13", "t18", "t22", "t23",
                             "t24", "t26"]],
    ["nothing.here.at.all", ["t6", "t22", "t23", "t24"]],
    ["oneword",             ["t6", "t22", "t23", "t24", "t25"]]
];

global.rabbitmq_expected_results_after_clear = [
    ["a.b.c", []],
    ["b.b.c", []],
    ["", []]
];
