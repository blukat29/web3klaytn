package caver.sdk.apis

import caver.sdk.models.EthAccountsRequest
import io.kotest.core.spec.style.BehaviorSpec
import io.kotest.matchers.shouldNotBe
import okhttp3.OkHttpClient
import okhttp3.logging.HttpLoggingInterceptor
import retrofit2.Retrofit
import retrofit2.converter.gson.JsonRpcConverterFactory

private const val BASE_URL = "http://localhost:8551"

class EthAccountApiAccountsTest : BehaviorSpec({

    val logging = HttpLoggingInterceptor()

    logging.level = HttpLoggingInterceptor.Level.BODY

    val httpClient = OkHttpClient.Builder()
        .addInterceptor(logging)
        .build()

    //Given
    Given("In Local Klaytn network") {

        val retrofit = Retrofit.Builder()
            .baseUrl(BASE_URL)
            .addConverterFactory(JsonRpcConverterFactory.create())
            .client(httpClient)
            .build()

        When("Call EthAccountApi.ethAccounts") {
            val ethAccountApi = retrofit.create(EthAccountApi::class.java)
            val request = EthAccountsRequest()
            request.method = "eth_accounts"
            request.id = 1
            request.jsonrpc = "2.0"
            request.params = emptyList()
            println(request)

            Then("return account info") {
                val account = ethAccountApi.ethAccounts(request).result()
                account!!.result.shouldNotBe(null)
            }

        }

        When("Call EthAccountApiService.ethAccounts") {
            val apiService = EthAccountApiService(retrofit)
            Then("Get account eth") {
                val account = apiService.ethAccounts().result()
                account.shouldNotBe(null)
                account!!.result.shouldNotBe(null)
            }
        }
    }
})