import { Card } from "@repo/ui/card"

export const p2pDisplay = ({
    p2ptxn
}: {
    p2ptxn: {
        time: Date,
        amount: number,
        // TODO: Can the type of `status` be more specific?
        from: string,
        to: string
        // provider: string
    }[]
}) => {
    if (!p2ptxn.length) {
        return <Card title="Recent Transactions">
            <div className="text-center pb-8 pt-8">
                No Recent transactions
            </div>
        </Card>
    }
    return <Card title="P2P Transactions">
        <div className="pt-2">
            {p2ptxn.map(t => <div className="flex justify-between">
                <div>
                    <div className="text-sm">
                        Received INR
                    </div>
                    <div className="">
                        {t.from} to {t.to}
                    </div>
                    <div className="text-slate-600 text-xs">
                        {t.time.toDateString()}
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    + Rs {t.amount / 100}
                </div>

            </div>)}
        </div>
    </Card>
}