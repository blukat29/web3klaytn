plugins {
    id("org.jetbrains.kotlin.jvm") version "1.7.21"
}

val kotestVersion: String by project
val retrofitVersion: String by project

repositories {
    mavenCentral()
    maven {
        url = uri("https://repo1.maven.org/maven2")
    }
}

dependencies {
    implementation(files("../../../sdk/client/java/openapi/build/libs/caver-java-v1.10.0.jar"))

    // Align versions of all Kotlin components
    implementation(platform("org.jetbrains.kotlin:kotlin-bom"))

    // Use the Kotlin JDK 8 standard library.

    implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")
//    implementation("com.google.code.gson:gson:2.9.0")
    implementation("com.squareup.okhttp3:logging-interceptor:4.10.0")
    implementation("com.squareup.retrofit2:retrofit:$retrofitVersion")
    implementation("com.squareup.retrofit2:converter-gson:$retrofitVersion")
//    implementation("com.squareup.retrofit2:converter-scalars:$retrofitVersion")

    // Use the kotest for BDD
    testImplementation("io.kotest:kotest-runner-junit5:$kotestVersion")
    testImplementation("io.kotest:kotest-assertions-core:$kotestVersion")
    testImplementation("io.kotest:kotest-property:$kotestVersion")
}

tasks.test {
    useJUnitPlatform()

    maxHeapSize = "1G"

//    testLogging {
//        events("passed")
//    }
}