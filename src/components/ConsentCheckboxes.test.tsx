import { describe, expect, it } from "vitest";
import { emptyConsent, isConsentValid } from "./ConsentCheckboxes";

describe("ConsentCheckboxes helpers", () => {
  it("requires all mandatory consent flags", () => {
    expect(isConsentValid(emptyConsent)).toBe(false);
    expect(
      isConsentValid({
        privacy: true,
        terms: true,
        dataProcessing: true,
        marketing: false,
        internationalTransfer: false,
      }),
    ).toBe(true);
  });
});
