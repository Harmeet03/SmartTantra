
export const Terms = () => {
    
    return(
        <div>
            <div className="border-b p-4 flex justify-between items-center fixed top-0 left-0 w-full bg-white md:text-2xl text-lg">
                <span className="fa fa-arrow-left cursor-pointer"/>
                <h1 className="md:text-4xl text-lg">Terms & Conditions</h1>
                <button className="p-2 px-8 bg-blue-500 cursor-pointer text-white"> Done! </button>
            </div>
            <div className="m-8 mt-24 leading-10 text-2xl">
                <p><strong>Last Updated:</strong> March 2026</p><br/>
                <section>
                    <h2 className='text-4xl'>1. Introduction</h2>
                    <p className='mx-10'>
                    Welcome to ClothTantra. These Terms and Conditions govern your use of
                    the ClothTantra smart retail platform including the website, RFID
                    based checkout system, and related services.
                    </p>
                </section><br/>

                <section>
                    <h2 className='text-4xl'>2. Use of Platform</h2>
                    <p className='mx-10'>
                    By accessing ClothTantra, users agree to provide accurate account
                    information and use the system responsibly.
                    </p>
                </section><br/>

                <section>
                    <h2 className='text-4xl'>3. Store Entry and Session</h2>
                    <p className='mx-10'>
                    Entry into the store requires scanning a QR code which creates a
                    temporary session linked to the user account. Sessions may expire
                    automatically if checkout is not completed within the allowed time.
                    </p>
                </section><br/>

                <section>
                    <h2 className='text-4xl'>4. RFID Product Scanning</h2>
                    <p className='mx-10'>
                    Products inside the store are equipped with RFID tags. Scanning the
                    product at the billing counter links the item to the user’s active
                    session for checkout.
                    </p>
                </section><br/>

                <section>
                    <h2 className='text-4xl'>5. Payments</h2>
                    <p className='mx-10'>
                    All payments are securely processed using a third-party payment
                    gateway. ClothTantra does not store sensitive financial information.
                    </p>
                </section><br/>

                <section>
                    <h2 className='text-4xl'>6. User Responsibilities</h2>
                    <p className='mx-10'>
                    Users must not attempt unauthorized access to the system or interfere
                    with the operation of IoT devices used in the store.
                    </p>
                </section><br/>

                <section>
                    <h2 className='text-4xl'>7. Limitation of Liability</h2>
                    <p className='mx-10'>
                    ClothTantra is not responsible for network issues, device failures, or
                    payment gateway interruptions caused by third-party systems.
                    </p>
                </section><br/>

                <section>
                    <h2 className='text-4xl'>8. Updates to Terms</h2>
                    <p className='mx-10'>
                    These terms may be updated periodically to improve the system and user
                    experience.
                    </p>
                </section><br/>
            </div>
        </div>
    )
}

export const Policy = () => {
    return(
       <div>
    <div className="border-b p-4 flex justify-between items-center fixed top-0 left-0 w-full bg-white md:text-2xl text-lg">
        <span className="fa fa-arrow-left cursor-pointer"/>
        <h1 className="md:text-4xl text-lg">Privacy Policy</h1>
        <button className="p-2 px-8 bg-blue-500 cursor-pointer text-white"> Done! </button>
    </div>

    <div className="m-8 mt-24 leading-10 text-2xl">
        <p><strong>Last Updated:</strong> March 2026</p><br/>

        <section>
            <h2 className='text-4xl'>1. Introduction</h2>
            <p className='mx-10'>
            ClothTantra values the privacy of its users and is committed to
            protecting personal information collected through the platform.
            This Privacy Policy explains how user data is collected, used,
            and safeguarded while using the ClothTantra smart retail system.
            </p>
        </section><br/>

        <section>
            <h2 className='text-4xl'>2. Information We Collect</h2>
            <p className='mx-10'>
            When users register or interact with the ClothTantra platform,
            basic information such as name, email address, account credentials,
            and purchase history may be collected to enable account management
            and transaction processing.
            </p>
        </section><br/>

        <section>
            <h2 className='text-4xl'>3. Store Session Data</h2>
            <p className='mx-10'>
            When a user scans the entry QR code to enter the smart store,
            a temporary session is created. This session records activities
            such as product scans, cart updates, and checkout interactions
            during the user's visit.
            </p>
        </section><br/>

        <section>
            <h2 className='text-4xl'>4. RFID Technology Usage</h2>
            <p className='mx-10'>
            ClothTantra uses RFID technology to detect products scanned at
            the billing counter. The RFID system only identifies products
            and does not collect personal biometric data or track users
            physically inside the store.
            </p>
        </section><br/>

        <section>
            <h2 className='text-4xl'>5. Payment Processing</h2>
            <p className='mx-10'>
            Payments are securely processed through a third-party payment
            gateway. ClothTantra does not store credit card details, banking
            information, or other sensitive financial data on its servers.
            </p>
        </section><br/>

        <section>
            <h2 className='text-4xl'>6. How We Use Your Information</h2>
            <p className='mx-10'>
            The collected data is used to manage user accounts, process
            transactions, generate digital receipts, improve platform
            functionality, and ensure system security.
            </p>
        </section><br/>

        <section>
            <h2 className='text-4xl'>7. Data Protection</h2>
            <p className='mx-10'>
            ClothTantra implements authentication systems, secure server
            communication, and restricted administrative access to protect
            user information from unauthorized access or misuse.
            </p>
        </section><br/>

        <section>
            <h2 className='text-4xl'>8. Updates to Privacy Policy</h2>
            <p className='mx-10'>
            This Privacy Policy may be updated periodically to reflect
            improvements in system functionality or legal requirements.
            Continued use of the platform indicates acceptance of these updates.
            </p>
        </section><br/>
    </div>
</div>
    )
}