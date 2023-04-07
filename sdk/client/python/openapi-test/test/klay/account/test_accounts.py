from base.constants import KLAYTN_URL
from base.testing import KlaytnBaseTesting
from opensdk.sdk import OpenSDK


class TestKlayAccounts(KlaytnBaseTesting):
    sdk = OpenSDK(KLAYTN_URL)

    def test_post(self):
        klay_response = self.sdk.klay.accounts()

        self.covert_response(klay_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("result", self.response)