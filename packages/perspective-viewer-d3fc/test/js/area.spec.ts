/******************************************************************************
 *
 * Copyright (c) 2017, the Perspective Authors.
 *
 * This file is part of the Perspective library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

import { test } from "@playwright/test";
import {
    getSvgContentString,
    run_standard_tests,
} from "@finos/perspective-test";

test.describe("Area Tests", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/tools/perspective-test/src/html/basic-test.html", {
            waitUntil: "networkidle",
        });

        await page.evaluate(async () => {
            await document.querySelector("perspective-viewer")!.restore({
                plugin: "Y Area",
                columns: ["Sales"],
            });
        });
    });

    run_standard_tests(
        "area",
        getSvgContentString("perspective-viewer perspective-viewer-d3fc-xyline")
    );
});
